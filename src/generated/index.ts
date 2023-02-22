import { AbilitiesResolver } from './resolvers/Abilities.resolver';
import { AccessRoleResolver } from './resolvers/AccessRole.resolver';
import { AccessRoleAbilitiesResolver } from './resolvers/AccessRoleAbilities.resolver';
import { AddressResolver } from './resolvers/Address.resolver';
import { AdvisorResolver } from './resolvers/Advisor.resolver';
import { AdvisorRegistrationStatusResolver } from './resolvers/AdvisorRegistrationStatus.resolver';
import { AdvisorSponsorPlanResolver } from './resolvers/AdvisorSponsorPlan.resolver';
import { AuthTokenResolver } from './resolvers/AuthToken.resolver';
import { CensusRecordsResolver } from './resolvers/CensusRecords.resolver';
import { EmailDefinitionResolver } from './resolvers/EmailDefinition.resolver';
import { EmailWhiteLabelResolver } from './resolvers/EmailWhiteLabel.resolver';
import { FeatureToggleGlobalResolver } from './resolvers/FeatureToggleGlobal.resolver';
import { FeatureToggleLocalResolver } from './resolvers/FeatureToggleLocal.resolver';
import { FirmResolver } from './resolvers/Firm.resolver';
import { MfaEntryResolver } from './resolvers/MfaEntry.resolver';
import { MfaSetupResolver } from './resolvers/MfaSetup.resolver';
import { ModelResolver } from './resolvers/Model.resolver';
import { ParticipantResolver } from './resolvers/Participant.resolver';
import { ParticipantRegistrationStatusResolver } from './resolvers/ParticipantRegistrationStatus.resolver';
import { PartnerSystemResolver } from './resolvers/PartnerSystem.resolver';
import { PartnerSystemMappingResolver } from './resolvers/PartnerSystemMapping.resolver';
import { PayrollProviderResolver } from './resolvers/PayrollProvider.resolver';
import { ProgramResolver } from './resolvers/Program.resolver';
import { PsaResolver } from './resolvers/Psa.resolver';
import { RecordkeeperResolver } from './resolvers/Recordkeeper.resolver';
import { RegistrationAgreementEventResolver } from './resolvers/RegistrationAgreementEvent.resolver';
import { SharedEntityTypeResolver } from './resolvers/SharedEntityType.resolver';
import { SponsorResolver } from './resolvers/Sponsor.resolver';
import { SponsorActivationResolver } from './resolvers/SponsorActivation.resolver';
import { SponsorExemptionResolver } from './resolvers/SponsorExemption.resolver';
import { SponsorPlanResolver } from './resolvers/SponsorPlan.resolver';
import { SponsorPlanModelResolver } from './resolvers/SponsorPlanModel.resolver';
import { StatefulSchemaTrackingResolver } from './resolvers/StatefulSchemaTracking.resolver';
import { StateProgramResolver } from './resolvers/StateProgram.resolver';
import { UrlRedirectResolver } from './resolvers/UrlRedirect.resolver';
import { UserResolver } from './resolvers/User.resolver';
import { UserInviteResolver } from './resolvers/UserInvite.resolver';
import { UserMfaAttemptResolver } from './resolvers/UserMfaAttempt.resolver';
import { UserPasswordResetResolver } from './resolvers/UserPasswordReset.resolver';
import { UserRolesAdvisorResolver } from './resolvers/UserRolesAdvisor.resolver';
import { UserRolesEntityResolver } from './resolvers/UserRolesEntity.resolver';
import { UserRolesParticipantResolver } from './resolvers/UserRolesParticipant.resolver';
import { UserRolesSponsorResolver } from './resolvers/UserRolesSponsor.resolver';
import { UserSessionResolver } from './resolvers/UserSession.resolver';

export const resolvers = [
  AbilitiesResolver,
  AccessRoleResolver,
  AccessRoleAbilitiesResolver,
  AddressResolver,
  AdvisorResolver,
  AdvisorRegistrationStatusResolver,
  AdvisorSponsorPlanResolver,
  AuthTokenResolver,
  CensusRecordsResolver,
  EmailDefinitionResolver,
  EmailWhiteLabelResolver,
  FeatureToggleGlobalResolver,
  FeatureToggleLocalResolver,
  FirmResolver,
  ModelResolver,
  ParticipantResolver,
  ParticipantRegistrationStatusResolver,
  PartnerSystemResolver,
  PartnerSystemMappingResolver,
  PayrollProviderResolver,
  ProgramResolver,
  PsaResolver,
  RecordkeeperResolver,
  RegistrationAgreementEventResolver,
  SharedEntityTypeResolver,
  SponsorResolver,
  SponsorActivationResolver,
  SponsorExemptionResolver,
  SponsorPlanResolver,
  SponsorPlanModelResolver,
  StatefulSchemaTrackingResolver,
  StateProgramResolver,
  UserResolver,
  MfaEntryResolver,
  MfaSetupResolver,
  UrlRedirectResolver,
  UserInviteResolver,
  UserMfaAttemptResolver,
  UserPasswordResetResolver,
  UserRolesAdvisorResolver,
  UserRolesEntityResolver,
  UserRolesParticipantResolver,
  UserRolesSponsorResolver,
  UserSessionResolver
];
