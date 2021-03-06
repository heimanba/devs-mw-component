'use strict';
import { CommandCore } from '@midwayjs/command-core';
import { loadSpec } from '@midwayjs/serverless-spec-builder';
import { PackagePlugin } from '@midwayjs/fcli-plugin-package';
import { AliyunFCPlugin } from '@midwayjs/fcli-plugin-fc';
import { DeployPlugin } from '@midwayjs/fcli-plugin-deploy';

const deployFaas = async (baseDir: string) => {
  const core = new CommandCore({
    config: {
      servicePath: baseDir,
    },
    commands: ['deploy'],
    service: loadSpec(baseDir),
    provider: 'aliyun',
    log: console,
    options: {
      skipZip: true,
      serverlessDev: true,
    },
  });
  core.addPlugin(PackagePlugin);
  core.addPlugin(AliyunFCPlugin);
  core.addPlugin(DeployPlugin);
  await core.ready();
  await core.invoke(['deploy']);
};

export default deployFaas;
