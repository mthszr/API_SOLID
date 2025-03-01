import type { CheckInsRepository } from '@/repositories/check-ins-repository'
import type { CheckIn } from '@prisma/client'

interface FetchUserCheckInsHistoryRequest {
  userId: string
  page: number
}

type FetchUserCheckInsHistoryResponse = {
  checkIns: CheckIn[]
}

export class FetchUserCheckInsHistory {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
    page,
  }: FetchUserCheckInsHistoryRequest): Promise<FetchUserCheckInsHistoryResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserId(
      userId,
      page
    )

    return {
      checkIns,
    }
  }
}
