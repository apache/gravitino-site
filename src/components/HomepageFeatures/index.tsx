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

import Heading from '@theme/Heading';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Unified Metadata Management',
    description: (
      <>
        Gravitino abstracts the unified metadata models and APIs for different kinds of metadata sources. For example, relational metadata models for tabular data, like Hive, MySQL, PostgreSQL, etc. File metadata model for all the unstructured data, like HDFS, S3, and other formats.
      </>
    ),
  },
  {
    title: 'End-to-End Data Governance',
    description: (
      <>
        Gravitino aims to provide a unified metadata governance layer to manage end-to-end metadata in a unified way, including access control, auditing, discovery and other features.
      </>
    ),
  },
  {
    title: 'Direct Metadata Management',
    description: (
      <>
        Unlike traditional metadata management systems, which need to collect the metadata actively or passively from underlying systems, Gravitino manages these systems directly. It provides a set of connectors to connect to different metadata sources. The changes in Gravitino directly reflect in the underlying systems, and vice versa.
      </>
    ),
  },
  {
    title: 'Geo-Distribution Support',
    description: (
      <>
        Gravitino supports geo-distribution deployment, which means different instances of Gravitino can deploy in different regions or clouds, and they can connect to get the metadata from each other. With this, users can get a global view of metadata across the regions or clouds.
      </>
    ),
  },
  {
    title: 'Multi-Engine Support',
    description: (
      <>
        Gravitino supports different query engines to access the metadata. Currently, it supports Trino, users can use Trino to query the metadata and data without needing to change the existing SQL dialects. Other query engine support is on the roadmap, including Apache Spark, Apache Flink and others.
      </>
    ),
  },
  {
    title: 'AI Asset Management (WIP)',
    description: (
      <>
        The goal of Gravitino is to unify the data management in both data and AI assets. The support of AI assets like models, features, and others are under development.  
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className='text-center px-2 py-10 bg-feature shadow-md rounded-sm background-gradient'>
      <Heading as='h3' className='text-xl font-bold mb-2'>{title}</Heading>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div>
      <div className='background-gradient shadow-md mx-1 mb-4 py-4 text-center'>
        <Heading as='h1' className='font-bold mb-4 text-center text-xl md:text-4xl'>
          <div className='relative after:content-[ ] after:border-b-[1px] after:border-black after:absolute after:-bottom-1 after:left-[35%] after:w-[30%] after:h-2'>
            MAIN FEATURES
          </div>
        </Heading>
        <div>
          <img src='img/features.svg' />
        </div>
      </div>
      <div className='mx-4 pt-4'>
        <div className='grid grid-cols-2 gap-4 pb-10'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
}
