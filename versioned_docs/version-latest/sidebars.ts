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
      id: 'getting-started',
      label: 'Getting started',
      type: 'doc'
    },
    {
      id: 'how-to-install',
      label: 'How to install Gravitino',
      type: 'doc'
    },
    {
      id: 'iceberg-rest-service',
      label: 'Iceberg REST catalog service',
      type: 'doc'
    },
    {
      id: 'webui',
      label: 'Web UI',
      type: 'doc'
    },
    {
      label: 'Running Gravitino on',
      type: 'category',
      items: [
        {
          label: 'Local',
          type: 'link',
          href: 'getting-started#getting-started-locally'
        },
        {
          label: 'Amazon Web Services',
          type: 'link',
          href: 'getting-started#getting-started-on-amazon-web-services'
        },
        {
          label: 'Google Cloud Platform',
          type: 'link',
          href: 'getting-started#getting-started-on-google-cloud-platform'
        }
      ]
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
              id: 'lakehouse-iceberg-catalog',
              label: 'Iceberg catalog',
              type: 'doc'
            },
            {
              id: 'apache-hive-catalog',
              label: 'Hive catalog',
              type: 'doc'
            },
            {
              id: 'jdbc-mysql-catalog',
              label: 'MySQL catalog',
              type: 'doc'
            },
            {
              id: 'jdbc-postgresql-catalog',
              label: 'PostgreSQL catalog',
              type: 'doc'
            },
            {
              id: 'jdbc-doris-catalog',
              label: 'Doris catalog',
              type: 'doc'
            },
            {
              id: 'lakehouse-paimon-catalog',
              label: 'Paimon catalog',
              type: 'doc'
            },
          ]
        },
        {
          label: 'Fileset',
          type: 'category',
          items: [
            {
              id: 'hadoop-catalog',
              label: 'Hadoop catalog',
              type: 'doc'
            }
          ]
        },
        {
          label: 'Messaging',
          type: 'category',
          items: [
            {
              id: 'kafka-catalog',
              label: 'Kafka catalog',
              type: 'doc'
            }
          ]
        }
      ]
    },
    {
      label: 'Trino connector',
      type: 'category',
      items: [
        {
          id: 'trino-connector/index',
          label: 'Index',
          type: 'doc'
        },
        {
          id: 'trino-connector/trino-connector',
          label: 'Overview',
          type: 'doc'
        },
        {
          id: 'trino-connector/requirements',
          label: 'Requirements',
          type: 'doc'
        },
        {
          id: 'trino-connector/installation',
          label: 'Installation',
          type: 'doc'
        },
        {
          id: 'trino-connector/configuration',
          label: 'Configuration',
          type: 'doc'
        },
        {
          label: 'Supported catalogs',
          type: 'category',
          items: [
            {
              id: 'trino-connector/supported-catalog',
              label: 'Introduction',
              type: 'doc'
            },
            {
              id: 'trino-connector/catalog-hive',
              label: 'Hive',
              type: 'doc'
            },
            {
              id: 'trino-connector/catalog-iceberg',
              label: 'Iceberg',
              type: 'doc'
            },
            {
              id: 'trino-connector/catalog-mysql',
              label: 'MySQL',
              type: 'doc'
            },
            {
              id: 'trino-connector/catalog-postgresql',
              label: 'PostgreSQL',
              type: 'doc'
            }
          ]
        },
        {
          id: 'trino-connector/sql-support',
          label: 'Supported SQL',
          type: 'doc'
        },
        {
          id: 'trino-connector/development',
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
          id: 'spark-connector/spark-connector',
          label: 'Overview',
          type: 'doc'
        },
        {
          id: 'spark-connector/spark-catalog-hive',
          label: 'Hive',
          type: 'doc'
        },
        {
          id: 'spark-connector/spark-catalog-iceberg',
          label: 'Iceberg',
          type: 'doc'
        }
      ]
    },
    {
      label: 'Flink connector',
      type: 'category',
      items: [
        {
          id: 'flink-connector/flink-connector',
          label: 'Overview',
          type: 'doc'
        },
        {
          id: 'flink-connector/flink-catalog-hive',
          label: 'Hive',
          type: 'doc'
        },
      ]
    },
    {
      label: 'Server administration',
      type: 'category',
      items: [
        {
          id: 'gravitino-server-config',
          label: 'Configurations',
          type: 'doc'
        },
        {
          id: 'metrics',
          label: 'Metrics',
          type: 'doc'
        },
        {
          id: 'how-to-use-relational-backend-storage',
          label: 'How to use relational backend storage',
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
        }
      ]
    },
    {
      label: 'Gravitino playground',
      type: 'category',
      items: [
        {
          id: 'how-to-use-the-playground',
          label: 'Use Gravitino playground',
          type: 'doc'
        },
        {
          label: 'Install on AWS or GCP',
          type: 'link',
          href: 'getting-started#installing-gravitino-playground-on-aws-or-google-cloud-platform'
        }
      ]
    },
    {
      label: 'Programming guides',
      type: 'category',
      items: [
        {
          id: 'manage-metalake-using-gravitino',
          label: 'Manage metalake',
          type: 'doc'
        },
        {
          id: 'manage-relational-metadata-using-gravitino',
          label: 'Manage relational metadata',
          type: 'doc'
        },
        {
          id: 'manage-table-partition-using-gravitino',
          label: 'Manage table partition',
          type: 'doc'
        },
        {
          id: 'table-partitioning-bucketing-sort-order-indexes',
          label: 'Table partitioning, bucketing, sort ordering and indexes',
          type: 'doc'
        },
        {
          id: 'expression',
          label: 'Expression system',
          type: 'doc'
        },
        {
          id: 'manage-fileset-metadata-using-gravitino',
          label: 'Manage fileset metadata',
          type: 'doc'
        },
        {
          id: 'how-to-use-gvfs',
          label: 'Use Gravitino Virtual File System with Filesets',
          type: 'doc'
        },
        {
          id: 'manage-messaging-metadata-using-gravitino',
          label: 'Manage messaging metadata',
          type: 'doc'
        },
        {
          id: 'manage-tags-in-gravitino',
          label: 'Manage tags in Gravitino',
          type: 'doc'
        },
        {
          id: 'how-to-use-python-client',
          label: 'Use Gravitino Python Client',
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
          href: 'pathname:///docs/0.6.0-incubating/api/java/index.html'
        },
        {
          label: 'Gravitino Python doc',
          type: 'link',
          href: 'pathname:///docs/0.6.0-incubating/api/python/gravitino.html'
        }
      ]
    },
    {
      label: 'Development guides',
      type: 'category',
      items: [
        {
          id: 'how-to-build',
          label: 'How to build',
          type: 'doc'
        },
        {
          id: 'how-to-test',
          label: 'How to test',
          type: 'doc'
        },
        {
          id: 'how-to-sign-releases',
          label: 'How to sign and verify',
          type: 'doc'
        },
        {
          id: 'publish-docker-images',
          label: 'Publish Docker images',
          type: 'doc'
        },
        {
          id: 'docker-image-details',
          label: 'Docker image details',
          type: 'doc'
        }
      ]
    },
    'glossary'
  ],
};

export default sidebars;
