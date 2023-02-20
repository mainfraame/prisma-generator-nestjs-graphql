import { Args, Resolver, Int, Query } from "@nestjs/graphql";
import { PrismaClient } from "@prisma/client";

import { AdvisorSponsorPlan } from "../dto/AdvisorSponsorPlan.dto";

@Resolver(() => AdvisorSponsorPlan)
export class AdvisorSponsorPlanResolver {
  private prisma = new PrismaClient({});

}
