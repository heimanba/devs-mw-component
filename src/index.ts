import { HLogger, ILogger } from '@serverless-devs/core';
import deploy from './deploy.faas';
import build from './build.faas';

export default class JamStackComponent {
  @HLogger('MIDWAY_FAAS') logger: ILogger;
  async deploy(inputs: any) {
    const { ProjectName } = inputs.Project;
    const { cwd } = process;
    this.logger.debug(`[${ProjectName}] inputs params: ${JSON.stringify(inputs, null, 2)}`);

    await build(cwd());

    await deploy(cwd());
    this.logger.info('部署完成');
  }
}
