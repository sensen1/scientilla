import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Affiliation from  "./Affiliation.js";
import _Alias from  "./Alias.js";
import _Auth from  "./Auth.js";
import _Author from  "./Author.js";
import _DiscardedResearchItem from  "./DiscardedResearchItem.js";
import _ExternalResearchItem from  "./ExternalResearchItem.js";
import _Institute from  "./Institute.js";
import _Membership from  "./Membership.js";
import _Metadata from  "./Metadata.js";
import _NotDuplicateResearchItem from  "./NotDuplicateResearchItem.js";
import _Notification from  "./Notification.js";
import _NotificationRecipient from  "./NotificationRecipient.js";
import _OriginIdentifier from  "./OriginIdentifier.js";
import _Permission from  "./Permission.js";
import _PhdCourse from  "./PhdCourse.js";
import _PhdCycle from  "./PhdCycle.js";
import _PhdInstitute from  "./PhdInstitute.js";
import _ResearchEntity from  "./ResearchEntity.js";
import _ResearchItem from  "./ResearchItem.js";
import _ResearchItemOriginIdentifier from  "./ResearchItemOriginIdentifier.js";
import _ResearchItemType from  "./ResearchItemType.js";
import _ResearchItemTypeSourceType from  "./ResearchItemTypeSourceType.js";
import _Role from  "./Role.js";
import _RolePermission from  "./RolePermission.js";
import _SequelizeMeta from  "./SequelizeMeta.js";
import _Source from  "./Source.js";
import _SourceMetric from  "./SourceMetric.js";
import _SourceMetricSource from  "./SourceMetricSource.js";
import _SourceType from  "./SourceType.js";
import _UserAccount from  "./UserAccount.js";
import _UserAccountPermission from  "./UserAccountPermission.js";
import _UserAccountRole from  "./UserAccountRole.js";
import _VerifiedResearchItem from  "./VerifiedResearchItem.js";

export default function initModels(sequelize) {
  const Affiliation = _Affiliation.init(sequelize, DataTypes);
  const Alias = _Alias.init(sequelize, DataTypes);
  const Auth = _Auth.init(sequelize, DataTypes);
  const Author = _Author.init(sequelize, DataTypes);
  const DiscardedResearchItem = _DiscardedResearchItem.init(sequelize, DataTypes);
  const ExternalResearchItem = _ExternalResearchItem.init(sequelize, DataTypes);
  const Institute = _Institute.init(sequelize, DataTypes);
  const Membership = _Membership.init(sequelize, DataTypes);
  const Metadata = _Metadata.init(sequelize, DataTypes);
  const NotDuplicateResearchItem = _NotDuplicateResearchItem.init(sequelize, DataTypes);
  const Notification = _Notification.init(sequelize, DataTypes);
  const NotificationRecipient = _NotificationRecipient.init(sequelize, DataTypes);
  const OriginIdentifier = _OriginIdentifier.init(sequelize, DataTypes);
  const Permission = _Permission.init(sequelize, DataTypes);
  const PhdCourse = _PhdCourse.init(sequelize, DataTypes);
  const PhdCycle = _PhdCycle.init(sequelize, DataTypes);
  const PhdInstitute = _PhdInstitute.init(sequelize, DataTypes);
  const ResearchEntity = _ResearchEntity.init(sequelize, DataTypes);
  const ResearchItem = _ResearchItem.init(sequelize, DataTypes);
  const ResearchItemOriginIdentifier = _ResearchItemOriginIdentifier.init(sequelize, DataTypes);
  const ResearchItemType = _ResearchItemType.init(sequelize, DataTypes);
  const ResearchItemTypeSourceType = _ResearchItemTypeSourceType.init(sequelize, DataTypes);
  const Role = _Role.init(sequelize, DataTypes);
  const RolePermission = _RolePermission.init(sequelize, DataTypes);
  const SequelizeMeta = _SequelizeMeta.init(sequelize, DataTypes);
  const Source = _Source.init(sequelize, DataTypes);
  const SourceMetric = _SourceMetric.init(sequelize, DataTypes);
  const SourceMetricSource = _SourceMetricSource.init(sequelize, DataTypes);
  const SourceType = _SourceType.init(sequelize, DataTypes);
  const UserAccount = _UserAccount.init(sequelize, DataTypes);
  const UserAccountPermission = _UserAccountPermission.init(sequelize, DataTypes);
  const UserAccountRole = _UserAccountRole.init(sequelize, DataTypes);
  const VerifiedResearchItem = _VerifiedResearchItem.init(sequelize, DataTypes);

  Affiliation.belongsTo(Author, { as: "author", foreignKey: "authorId"});
  Author.hasMany(Affiliation, { as: "affiliations", foreignKey: "authorId"});
  Affiliation.belongsTo(Institute, { as: "institute", foreignKey: "instituteId"});
  Institute.hasMany(Affiliation, { as: "affiliations", foreignKey: "instituteId"});
  NotificationRecipient.belongsTo(Notification, { as: "notification", foreignKey: "notificationId"});
  Notification.hasMany(NotificationRecipient, { as: "notificationRecipients", foreignKey: "notificationId"});
  Metadata.belongsTo(OriginIdentifier, { as: "originIdentifier", foreignKey: "originIdentifierId"});
  OriginIdentifier.hasMany(Metadata, { as: "metadata", foreignKey: "originIdentifierId"});
  ResearchItemOriginIdentifier.belongsTo(OriginIdentifier, { as: "originIdentifier", foreignKey: "originIdentifierId"});
  OriginIdentifier.hasMany(ResearchItemOriginIdentifier, { as: "researchItemOriginIdentifiers", foreignKey: "originIdentifierId"});
  RolePermission.belongsTo(Permission, { as: "permission", foreignKey: "permissionId"});
  Permission.hasMany(RolePermission, { as: "rolePermissions", foreignKey: "permissionId"});
  UserAccountPermission.belongsTo(Permission, { as: "permission", foreignKey: "permissionId"});
  Permission.hasMany(UserAccountPermission, { as: "userAccountPermissions", foreignKey: "permissionId"});
  PhdCycle.belongsTo(PhdCourse, { as: "phdCourse", foreignKey: "phdCourseId"});
  PhdCourse.hasMany(PhdCycle, { as: "phdCycles", foreignKey: "phdCourseId"});
  PhdCourse.belongsTo(PhdInstitute, { as: "phdInstitute", foreignKey: "phdInstituteId"});
  PhdInstitute.hasMany(PhdCourse, { as: "phdCourses", foreignKey: "phdInstituteId"});
  Alias.belongsTo(ResearchEntity, { as: "researchEntity", foreignKey: "researchEntityId"});
  ResearchEntity.hasMany(Alias, { as: "aliases", foreignKey: "researchEntityId"});
  DiscardedResearchItem.belongsTo(ResearchEntity, { as: "researchEntity", foreignKey: "researchEntityId"});
  ResearchEntity.hasMany(DiscardedResearchItem, { as: "discardedResearchItems", foreignKey: "researchEntityId"});
  ExternalResearchItem.belongsTo(ResearchEntity, { as: "researchEntity", foreignKey: "researchEntityId"});
  ResearchEntity.hasMany(ExternalResearchItem, { as: "externalResearchItems", foreignKey: "researchEntityId"});
  Membership.belongsTo(ResearchEntity, { as: "childResearchEntity", foreignKey: "childResearchEntityId"});
  ResearchEntity.hasMany(Membership, { as: "memberships", foreignKey: "childResearchEntityId"});
  Membership.belongsTo(ResearchEntity, { as: "parentResearchEntity", foreignKey: "parentResearchEntityId"});
  ResearchEntity.hasMany(Membership, { as: "parentResearchEntityMemberships", foreignKey: "parentResearchEntityId"});
  NotDuplicateResearchItem.belongsTo(ResearchEntity, { as: "researchEntity", foreignKey: "researchEntityId"});
  ResearchEntity.hasMany(NotDuplicateResearchItem, { as: "notDuplicateResearchItems", foreignKey: "researchEntityId"});
  ResearchItem.belongsTo(ResearchEntity, { as: "creatorResearchEntity", foreignKey: "creatorResearchEntityId"});
  ResearchEntity.hasMany(ResearchItem, { as: "researchItems", foreignKey: "creatorResearchEntityId"});
  UserAccountPermission.belongsTo(ResearchEntity, { as: "researchEntity", foreignKey: "researchEntityId"});
  ResearchEntity.hasMany(UserAccountPermission, { as: "userAccountPermissions", foreignKey: "researchEntityId"});
  UserAccountRole.belongsTo(ResearchEntity, { as: "researchEntity", foreignKey: "researchEntityId"});
  ResearchEntity.hasMany(UserAccountRole, { as: "userAccountRoles", foreignKey: "researchEntityId"});
  VerifiedResearchItem.belongsTo(ResearchEntity, { as: "researchEntity", foreignKey: "researchEntityId"});
  ResearchEntity.hasMany(VerifiedResearchItem, { as: "verifiedResearchItems", foreignKey: "researchEntityId"});
  Author.belongsTo(ResearchItem, { as: "researchItem", foreignKey: "researchItemId"});
  ResearchItem.hasMany(Author, { as: "authors", foreignKey: "researchItemId"});
  DiscardedResearchItem.belongsTo(ResearchItem, { as: "researchItem", foreignKey: "researchItemId"});
  ResearchItem.hasMany(DiscardedResearchItem, { as: "discardedResearchItems", foreignKey: "researchItemId"});
  ExternalResearchItem.belongsTo(ResearchItem, { as: "researchItem", foreignKey: "researchItemId"});
  ResearchItem.hasMany(ExternalResearchItem, { as: "externalResearchItems", foreignKey: "researchItemId"});
  NotDuplicateResearchItem.belongsTo(ResearchItem, { as: "duplicateResearchItem", foreignKey: "duplicateResearchItemId"});
  ResearchItem.hasMany(NotDuplicateResearchItem, { as: "notDuplicateResearchItems", foreignKey: "duplicateResearchItemId"});
  NotDuplicateResearchItem.belongsTo(ResearchItem, { as: "researchItem", foreignKey: "researchItemId"});
  ResearchItem.hasMany(NotDuplicateResearchItem, { as: "researchItemNotDuplicateResearchItems", foreignKey: "researchItemId"});
  ResearchItemOriginIdentifier.belongsTo(ResearchItem, { as: "researchItem", foreignKey: "researchItemId"});
  ResearchItem.hasMany(ResearchItemOriginIdentifier, { as: "researchItemOriginIdentifiers", foreignKey: "researchItemId"});
  VerifiedResearchItem.belongsTo(ResearchItem, { as: "researchItem", foreignKey: "researchItemId"});
  ResearchItem.hasMany(VerifiedResearchItem, { as: "verifiedResearchItems", foreignKey: "researchItemId"});
  ResearchItem.belongsTo(ResearchItemType, { as: "researchItemType", foreignKey: "researchItemTypeId"});
  ResearchItemType.hasMany(ResearchItem, { as: "researchItems", foreignKey: "researchItemTypeId"});
  ResearchItemTypeSourceType.belongsTo(ResearchItemType, { as: "researchItemType", foreignKey: "researchItemTypeId"});
  ResearchItemType.hasMany(ResearchItemTypeSourceType, { as: "researchItemTypeSourceTypes", foreignKey: "researchItemTypeId"});
  RolePermission.belongsTo(Role, { as: "role", foreignKey: "roleId"});
  Role.hasMany(RolePermission, { as: "rolePermissions", foreignKey: "roleId"});
  UserAccountRole.belongsTo(Role, { as: "role", foreignKey: "roleId"});
  Role.hasMany(UserAccountRole, { as: "userAccountRoles", foreignKey: "roleId"});
  SourceMetricSource.belongsTo(Source, { as: "source", foreignKey: "sourceId"});
  Source.hasMany(SourceMetricSource, { as: "sourceMetricSources", foreignKey: "sourceId"});
  SourceMetricSource.belongsTo(SourceMetric, { as: "sourceMetric", foreignKey: "sourceMetricId"});
  SourceMetric.hasMany(SourceMetricSource, { as: "sourceMetricSources", foreignKey: "sourceMetricId"});
  ResearchItemTypeSourceType.belongsTo(SourceType, { as: "sourceType", foreignKey: "sourceTypeId"});
  SourceType.hasMany(ResearchItemTypeSourceType, { as: "researchItemTypeSourceTypes", foreignKey: "sourceTypeId"});
  Source.belongsTo(SourceType, { as: "sourceType", foreignKey: "sourceTypeId"});
  SourceType.hasMany(Source, { as: "sources", foreignKey: "sourceTypeId"});
  Auth.belongsTo(UserAccount, { as: "userAccount", foreignKey: "userAccountId"});
  UserAccount.hasMany(Auth, { as: "auths", foreignKey: "userAccountId"});
  Notification.belongsTo(UserAccount, { as: "sender", foreignKey: "senderId"});
  UserAccount.hasMany(Notification, { as: "notifications", foreignKey: "senderId"});
  NotificationRecipient.belongsTo(UserAccount, { as: "recipient", foreignKey: "recipientId"});
  UserAccount.hasMany(NotificationRecipient, { as: "notificationRecipients", foreignKey: "recipientId"});
  UserAccountPermission.belongsTo(UserAccount, { as: "userAccount", foreignKey: "userAccountId"});
  UserAccount.hasMany(UserAccountPermission, { as: "userAccountPermissions", foreignKey: "userAccountId"});
  UserAccountRole.belongsTo(UserAccount, { as: "userAccount", foreignKey: "userAccountId"});
  UserAccount.hasMany(UserAccountRole, { as: "userAccountRoles", foreignKey: "userAccountId"});
  Author.belongsTo(VerifiedResearchItem, { as: "verifiedResearchItem", foreignKey: "verifiedResearchItemId"});
  VerifiedResearchItem.hasMany(Author, { as: "authors", foreignKey: "verifiedResearchItemId"});

  return {
    Affiliation,
    Alias,
    Auth,
    Author,
    DiscardedResearchItem,
    ExternalResearchItem,
    Institute,
    Membership,
    Metadata,
    NotDuplicateResearchItem,
    Notification,
    NotificationRecipient,
    OriginIdentifier,
    Permission,
    PhdCourse,
    PhdCycle,
    PhdInstitute,
    ResearchEntity,
    ResearchItem,
    ResearchItemOriginIdentifier,
    ResearchItemType,
    ResearchItemTypeSourceType,
    Role,
    RolePermission,
    SequelizeMeta,
    Source,
    SourceMetric,
    SourceMetricSource,
    SourceType,
    UserAccount,
    UserAccountPermission,
    UserAccountRole,
    VerifiedResearchItem,
  };
}
