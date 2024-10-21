import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/rest/gravitino-rest-api",
    },
    {
      type: "category",
      label: "metalake",
      items: [
        {
          type: "doc",
          id: "api/rest/list-metalakes",
          label: "List metalakes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/create-metalake",
          label: "Create metalake",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest/load-metalake",
          label: "Get metalake",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/alter-metalake",
          label: "Update metalake",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/rest/drop-metalake",
          label: "Drop metalake",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "tag",
      items: [
        {
          type: "doc",
          id: "api/rest/list-tags",
          label: "List tags (names)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/create-tag",
          label: "Create tag",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest/get-tag",
          label: "Get tag",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/alter-tag",
          label: "Update tag",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/rest/delete-tag",
          label: "Delete tag",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/rest/list-object-tags",
          label: "List tags (names) for metadata object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/associate-tags",
          label: "Associate tags with metadata object",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest/get-object-tag",
          label: "Get tag for metadata object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/list-tag-objects",
          label: "list metadata objects for tag",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "access control",
      items: [
        {
          type: "doc",
          id: "api/rest/list-roles-for-object",
          label: "List role names for metadata object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/list-users",
          label: "List users (names)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/add-user",
          label: "Add user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest/get-user",
          label: "Get user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/remove-user",
          label: "Remove user",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/rest/list-groups",
          label: "List groups (names)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/add-group",
          label: "Add group",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest/get-group",
          label: "Get group",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/remove-group",
          label: "Remove group",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/rest/list-roles",
          label: "List role names",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/create-role",
          label: "Create role",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest/get-role",
          label: "Get Role",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/delete-role",
          label: "Delete role",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/rest/set-owner",
          label: "Set owner",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/rest/get-owner",
          label: "Get owner",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/grant-role-to-user",
          label: "Grant roles to a user",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/rest/revoke-role-from-user",
          label: "Revoke roles to a user",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/rest/grant-role-to-group",
          label: "Grant roles to a group",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/rest/revoke-role-from-group",
          label: "Revoke roles to a group",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/rest/grant-privilege-to-role",
          label: "Grant privileges to a role",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/rest/revoke-privilege-from-role",
          label: "Revoke privileges from a role",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "catalog",
      items: [
        {
          type: "doc",
          id: "api/rest/list-catalogs",
          label: "List catalogs (names)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/create-catalog",
          label: "Create catalog",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest/test-connection",
          label: "Test catalog connection",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest/load-catalog",
          label: "Get catalog",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/alter-catalog",
          label: "Update catalog",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/rest/drop-catalog",
          label: "Drop catalog",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "schema",
      items: [
        {
          type: "doc",
          id: "api/rest/list-schemas",
          label: "List schemas",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/create-schema",
          label: "Create schema",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest/load-schema",
          label: "Get schema",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/alter-schema",
          label: "Update schema",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/rest/drop-schema",
          label: "Drop schema",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "table",
      items: [
        {
          type: "doc",
          id: "api/rest/list-tables",
          label: "List tables",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/create-table",
          label: "Create table",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest/load-table",
          label: "Get table",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/alter-table",
          label: "Update table",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/rest/drop-table",
          label: "Drop table",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "partition",
      items: [
        {
          type: "doc",
          id: "api/rest/list-partitions",
          label: "List partitions (names)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/add-partitions",
          label: "Add partitions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest/get-partition",
          label: "Get partition by name",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/drop-partition",
          label: "Drop partition by name",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "fileset",
      items: [
        {
          type: "doc",
          id: "api/rest/list-filesets",
          label: "List filesets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/create-fileset",
          label: "Create fileset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest/load-fileset",
          label: "Get fileset",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/alter-fileset",
          label: "Update fileset",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/rest/drop-fileset",
          label: "Drop fileset",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "topic",
      items: [
        {
          type: "doc",
          id: "api/rest/list-topics",
          label: "List topics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/create-topic",
          label: "Create topic",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/rest/load-topic",
          label: "Get topic",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/rest/alter-topic",
          label: "Update topic",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/rest/drop-topic",
          label: "Delete topic",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
