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

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Unified metadata management',
    description: (
      <>
        Gravitino abstracts the unified metadata models and APIs for different kinds of metadata sources. For example, relational metadata models for tabular data, like Hive, MySQL, PostgreSQL, etc. File metadata model for all the unstructured data, like HDFS, S3, and other formats.
      </>
    ),
  },
  {
    title: 'Unified metadata governance',
    description: (
      <>
        Gravitino also provides a unified metadata governance layer (WIP) to manage the metadata in a unified way, including access control, auditing, discovery and other features.
      </>
    ),
  },
  {
    title: 'Direct metadata management',
    description: (
      <>
        Unlike traditional metadata management systems, which need to collect the metadata actively or passively from underlying systems, Gravitino manages these systems directly. It provides a set of connectors to connect to different metadata sources. The changes in Gravitino directly reflect in the underlying systems, and vice versa.
      </>
    ),
  },
  {
    title: 'Geo-distribution support',
    description: (
      <>
        Gravitino supports geo-distribution deployment, which means different instances of Gravitino can deploy in different regions or clouds, and they can connect to get the metadata from each other. With this, users can get a global view of metadata across the regions or clouds.
      </>
    ),
  },
  {
    title: 'Multi-engine support',
    description: (
      <>
        Gravitino supports different query engines to access the metadata. Currently, it supports Trino, users can use Trino to query the metadata and data without needing to change the existing SQL dialects. Other query engine support is on the roadmap, including Apache Spark, Apache Flink and others.
      </>
    ),
  },
  {
    title: 'AI asset management (WIP)',
    description: (
      <>
        The goal of Gravitino is to unify the data management in both data and AI assets. The support of AI assets like models, features, and others are under development.  
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
