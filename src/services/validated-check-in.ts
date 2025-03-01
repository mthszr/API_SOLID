import type { CheckInsRepository } from '@/repositories/check-ins-repository'
import type { CheckIn } from '@prisma/client'
import dayjs from 'dayjs'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { LateCheckInValidationError } from './errors/late-check-in-validation-error'

interface ValidatedCheckInUseCaseRequest {
  checkInId: string
}

type ValidatedCheckInUseCaseResponse = {
  checkIn: CheckIn
}

export class ValidatedCheckInUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    checkInId,
  }: ValidatedCheckInUseCaseRequest): Promise<ValidatedCheckInUseCaseResponse> {
    const checkIn = await this.checkInsRepository.findById(checkInId)

    if (!checkIn) {
      throw new ResourceNotFoundError()
    }

    const distanceInMinutesFromCheckInCreation = dayjs(new Date()).diff(
      checkIn.created_at,
      'minutes'
    )

    if (distanceInMinutesFromCheckInCreation > 20) {
      throw new LateCheckInValidationError()
    }
 
    checkIn.validated_at = new Date()

    await this.checkInsRepository.save(checkIn)

    return {
      checkIn,
    }
  }
}
