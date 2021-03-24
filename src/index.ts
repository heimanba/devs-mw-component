import { HLogger, ILogger } from '@serverless-devs/core';

export default class JamStackComponent {
  @HLogger('MIDWAY_FAAS') logger: ILogger;
  async deploy(inputs: any) {
    const { ProjectName } = inputs.Project;
    this.logger.debug(`[${ProjectName}] inputs params: ${JSON.stringify(inputs, null, 2)}`);
    // 第一步:
    // s.yml 生成 f.yml
    // 执行 mw deploy 脚本命令 （TODO: 最好提供某个npm包）

    // 第二步:
    // .serverless/f.yml  -> template.yml -> fun部署
    // .serverless/f.yml -> fc-deploy还是 .serverless/f.yml -> template.yml -> fc-deploy
  }
}
