/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import apiDocSidebar from './api/rest/sidebar'

const fs = require('fs')
const currentVersion = fs.readFileSync('CURRENT_VERSION', 'utf-8').replace(/\n/g, '').trim()

// Check https://docusaurus.io/docs/sidebar/ for more information.
const sidebars: SidebarsConfig = {
  docs: [
    {
      id: 'index',
      label: 'What\'s Apache Gravitino?',
      type: 'doc'
    },
    {
      id: 'overview',
      label: 'Overview',
      type: 'doc'
    },
    {
      "label": "Getting Started",
      "type": "category",
      "items": [
        {
          "id": "getting-started/index",
          "label": "Overview",
          "type": "doc"
        },
        {
          "label": "Prepare Environment",
          "type": "category",
          "items": [
            {
              "label": "Amazon Web Services",
              "type": "link",
              "href": "/docs/0.8.0-incubating/getting-started/#aws"
            },
            {
              "label": "Google Cloud Platform",
              "type": "link",
              "href": "/docs/0.8.0-incubating/getting-started/#gcp"
            },
            {
              "label": "Local Workstation",
              "type": "link",
              "href": "/docs/0.8.0-incubating/getting-started/#local-workstation"
            }
          ]
        },
        {
          "id": "getting-started/hive",
          "label": "Install Apache Hive",
          "type": "doc"
        },
        {
          "id": "getting-started/aws-remote-access",
          "label": "Remote Accesss on AWS",
          "type": "doc"
        }
      ]
    },
    {
      label: 'Installation',
      type: 'category',
      items: [
        {
          id: 'install/install',
          label: 'Install Gravitino',
          type: 'doc'
        },
        {
          id: 'install/backend-storage',
          label: 'Configure the backend storage',
          type: 'doc'
        },
      ]
    },
    {
      label: 'Using Gravitino',
      type: 'category',
      items: [
        {
          label: 'Command line interface (CLI)',
          type: 'category',
          items: [
            {
              id: 'client/cli',
              label: "Overview",
              type: 'doc'
            },
            {
              id: 'client/cli-reference/generic',
              label: "Generic commands",
              type: 'doc'
            },
            {
              id: 'client/cli-reference/auth',
              label: "Authentication commands",
              type: 'doc'
            },
            {
              id: 'client/cli-reference/metalake',
              label: "Metalake commands",
              type: 'doc'
            },
            {
              id: 'client/cli-reference/catalog',
              label: "Catalog commands",
              type: 'doc'
            },
            {
              id: 'client/cli-reference/schema',
              label: "Schema commands",
              type: 'doc'
            },
            {
              id: 'client/cli-reference/table',
              label: "Table commands",
              type: 'doc'
            },
            {
              id: 'client/cli-reference/fileset',
              label: "Fileset commands",
              type: 'doc'
            },
            {
              id: 'client/cli-reference/topic',
              label: "Topic commands",
              type: 'doc'
            },
            {
              id: 'client/cli-reference/column',
              label: "Column commands",
              type: 'doc'
            },
            {
              id: 'client/cli-reference/tag',
              label: "Tag commands",
              type: 'doc'
            },
            {
              id: 'client/cli-reference/user',
              label: "User commands",
              type: 'doc'
            },
            {
              id: 'client/cli-reference/group',
              label: "Group commands",
              type: 'doc'
            },
            {
              id: 'client/cli-reference/role',
              label: "Role commands",
              type: 'doc'
            },
            {
              id: 'client/cli-reference/owner',
              label: "Owner commands",
              type: 'doc'
            }
          ]
        },
        {
          id: 'client/webui',
          label: 'Web UI',
          type: 'doc'
        },
        {
          id: 'client/python-client',
          label: 'Use Gravitino Python Client',
          type: 'doc'
        }
      ]
    },
    {
      id: 'iceberg-rest-service',
      label: 'Iceberg REST catalog service',
      type: 'doc'
    },
    {
      label: 'Catalogs',
      type: 'category',
      items: [
        {
          label: 'Relational',
          type: 'category',
          items: [
            {
              label: 'Hive catalog',
              type: 'category',
              items: [
                {
                  id: 'catalogs/relational/hive/index',
                  label: 'Hive catalog',
                  type: 'doc'
                },
                {
                  id: 'catalogs/relational/hive/cloud-storage',
                  label: 'Hive catalog with cloud storage',
                  type: 'doc'
                }
              ]
            },
            {
              label: 'Lakehouse catalog',
              type: 'category',
              items: [
                {
                  id: 'catalogs/relational/lakehouse/hudi',
                  label: 'Hudi catalog',
                  type: 'doc'
                },
                {
                  id: 'catalogs/relational/lakehouse/iceberg',
                  label: 'Iceberg catalog',
                  type: 'doc'
                },
                {
                  id: 'catalogs/relational/lakehouse/paimon',
                  label: 'Paimon catalog',
                  type: 'doc'
                }
              ],
            },
            {
              label: 'JDBC catalog',
              type: 'category',
              items: [
                {
                  id: 'catalogs/relational/jdbc/doris',
                  label: 'Doris catalog',
                  type: 'doc'
                },
                {
                  id: 'catalogs/relational/jdbc/mysql',
                  label: 'MySQL catalog',
                  type: 'doc'
                },
                {
                  id: 'catalogs/relational/jdbc/oceanbase',
                  label: 'OceanBase catalog',
                  type: 'doc'
                },
                {
                  id: 'catalogs/relational/jdbc/postgresql',
                  label: 'PostgreSQL catalog',
                  type: 'doc'
                }
              ]
            },
            {
              id: 'catalogs/relational/partitioned-table',
              label: 'Manage partitioned tables',
              type: 'doc'
            },
            {
              id: 'catalogs/relational/indexed-table',
              label: 'Manage indexed tables',
              type: 'doc'
            },
            {
              id: 'catalogs/relational/distributed-table',
              label: 'Manage distributed tables',
              type: 'doc'
            },
            {
              id: 'catalogs/relational/sorted-table',
              label: 'Manage sorted tables',
              type: 'doc'
            }
          ]
        },
        {
          label: 'Fileset',
          type: 'category',
          items: [
            {
              label: 'Hadoop catalog',
              type: 'category',
              items: [
                {
                  id: 'catalogs/fileset/hadoop/index',
                  label: 'Hadoop catalog index',
                  type: 'doc'
                },
                {
                  id: 'catalogs/fileset/hadoop/hadoop-catalog',
                  label: 'Hadoop catalog',
                  type: 'doc'
                },
                {
                  id: 'catalogs/fileset/hadoop/s3',
                  label: 'Hadoop catalog with S3',
                  type: 'doc'
                },
                {
                  id: 'catalogs/fileset/hadoop/gcs',
                  label: 'Hadoop catalog with GCS',
                  type: 'doc'
                },
                {
                  id: 'catalogs/fileset/hadoop/oss',
                  label: 'Hadoop catalog with OSS',
                  type: 'doc'
                },
                {
                  id: 'catalogs/fileset/hadoop/adls',
                  label: 'Hadoop catalog with ADLS',
                  type: 'doc'
                }
              ]
            }
          ]
        },
        {
          label: 'Messaging',
          type: 'category',
          items: [
            {
              id: 'catalogs/messaging/kafka/index',
              label: 'Kafka catalog',
              type: 'doc'
            }
          ]
        },
        {
          label: 'Model',
          type: 'category',
          items: [
            {
              id: 'catalogs/model/index',
              label: 'Model catalog',
              type: 'doc'
            }
          ]
        }
      ]
    },
    {
      label: 'Connectors',
      type: 'category',
      items: [
        {
          label: 'Trino connector',
          type: 'category',
          items: [
            {
              id: 'connectors/trino/index',
              label: 'Index',
              type: 'doc'
            },
            {
              id: 'connectors/trino/trino-connector',
              label: 'Overview',
              type: 'doc'
            },
            {
              id: 'connectors/trino/requirements',
              label: 'Requirements',
              type: 'doc'
            },
            {
              id: 'connectors/trino/installation',
              label: 'Installation',
              type: 'doc'
            },
            {
              id: 'connectors/trino/configuration',
              label: 'Configuration',
              type: 'doc'
            },
            {
              label: 'Supported catalogs',
              type: 'category',
              items: [
                {
                  id: 'connectors/trino/supported-catalog',
                  label: 'Introduction',
                  type: 'doc'
                },
                {
                  id: 'connectors/trino/catalog-hive',
                  label: 'Hive',
                  type: 'doc'
                },
                {
                  id: 'connectors/trino/catalog-iceberg',
                  label: 'Iceberg',
                  type: 'doc'
                },
                {
                  id: 'connectors/trino/catalog-mysql',
                  label: 'MySQL',
                  type: 'doc'
                },
                {
                  id: 'connectors/trino/catalog-postgresql',
                  label: 'PostgreSQL',
                  type: 'doc'
                }
              ]
            },
            {
              id: 'connectors/trino/sql-support',
              label: 'Supported SQL',
              type: 'doc'
            },
            {
              id: 'connectors/trino/development',
              label: 'Development',
              type: 'doc'
            }
          ]
        },
        {
          label: 'Spark connector',
          type: 'category',
          items: [
            {
              id: 'connectors/spark/index',
              label: 'Overview',
              type: 'doc'
            },
            {
              id: 'connectors/spark/spark-catalog-hive',
              label: 'Hive',
              type: 'doc'
            },
            {
              id: 'connectors/spark/spark-catalog-iceberg',
              label: 'Iceberg',
              type: 'doc'
            },
            {
              id: 'connectors/spark/spark-catalog-paimon',
              label: 'Paimon',
              type: 'doc'
            },
            {
              id: 'connectors/spark/spark-authentication-with-gravitino',
              label: 'Spark authentication',
              type: 'doc'
            }
          ]
        },
        {
          label: 'Flink connector',
          type: 'category',
          items: [
            {
              id: 'connectors/flink/index',
              label: 'Overview',
              type: 'doc'
            },
            {
              id: 'connectors/flink/flink-catalog-hive',
              label: 'Hive',
              type: 'doc'
            },
            {
              id: 'connectors/flink/flink-catalog-iceberg',
              label: 'Iceberg',
              type: 'doc'
            },
            {
              id: 'connectors/flink/flink-catalog-paimon',
              label: 'Paimon',
              type: 'doc'
            }
          ]
        }
      ]
    },
    {
      label: 'Server administration',
      type: 'category',
      items: [
        {
          id: 'admin/server-config',
          label: 'Gravitino Server Configurations',
          type: 'doc'
        },
        {
          id: 'admin/metalake',
          label: 'Manage metalake',
          type: 'doc'
        },
        {
          id: 'metrics',
          label: 'Metrics',
          type: 'doc'
        },
        {
          id: 'how-to-upgrade',
          label: 'How to upgrade',
          type: 'doc'
        }
      ]
    },
    {
      label: 'Security',
      type: 'category',
      items: [
        {
          id: 'security/security',
          label: 'Overview',
          type: 'doc'
        },
        {
          id: 'security/access-control',
          label: 'Access Control',
          type: 'doc'
        },
        {
          id: 'security/authorization-pushdown',
          label: 'Authorization Push-down',
          type: 'doc'
        },
        {
          id: 'security/how-to-authenticate',
          label: 'How to authenticate',
          type: 'doc'
        },
        {
          id: 'security/how-to-use-cors',
          label: 'How to use CORS',
          type: 'doc'
        },
        {
          id: 'security/how-to-use-https',
          label: 'How to use HTTPS',
          type: 'doc'
        },
        {
          id: 'security/credential-vending',
          label: 'Credential Vending',
          type: 'doc'
        }
      ]
    },
    {
      label: 'Gravitino playground',
      type: 'category',
      items: [
        {
          "id": "playground/install",
          "label": "Installing the Playground",
          "type": "doc"
        },
        {
          "id": "playground/using-the-playground",
          "label": "Using the playground",
          "type": "doc"
        }
      ]
    },
    {
      label: 'Programming guides',
      type: 'category',
      items: [
        {
          id: 'metadata/relational',
          label: 'Manage relational metadata',
          type: 'doc'
        },
        {
          id: 'metadata/fileset',
          label: 'Manage fileset metadata',
          type: 'doc'
        },
        {
          id: 'metadata/messaging',
          label: 'Manage messaging metadata',
          type: 'doc'
        },
        {
          id: 'metadata/model',
          label: 'Manage model metadata',
          type: 'doc'
        },
        {
          id: 'metadata/tags',
          label: 'Manage tags in Gravitino',
          type: 'doc'
        },
        {
          id: 'expression',
          label: 'Expression system',
          type: 'doc'
        },
        {
          id: 'how-to-use-gvfs',
          label: 'Use Gravitino Virtual File System with Filesets',
          type: 'doc'
        },
        {
          label: 'Gravitino Open API',
          type: 'category',
          items: [...apiDocSidebar]
        },
        {
          label: 'Gravitino Java doc',
          type: 'link',
          href: `pathname:///docs/${currentVersion}/api/java/index.html`
        },
        {
          label: 'Gravitino Python doc',
          type: 'link',
          href: `pathname:///docs/${currentVersion}/api/python/index.html`
        }
      ]
    },
    {
      label: 'Development guide',
      type: 'category',
      items: [
        {
          id: 'develop/how-to-build',
          label: 'Building packages',
          type: 'doc'
        },
        {
          id: 'develop/testing',
          label: 'Testing the server',
          type: 'doc'
        },
        {
          id: 'develop/release-signing',
          label: 'Signing release files',
          type: 'doc'
        },
        {
          id: 'develop/publish-docker-images',
          label: 'publishing Docker images',
          type: 'doc'
        },
        {
          id: 'develop/docker-image-details',
          label: 'Docker image details',
          type: 'doc'
        }
      ]
    },
    {
      "label": "References",
      "type": "category",
      "items": [
        {
          "id": "reference/events",
          "label": "Gravitino events",
          "type": "doc"
        },
        {
          "id": "reference/glossary",
          "label": "Glossary",
          "type": "doc"
        }
      ]
    }
  ]
};

export default sidebars;
