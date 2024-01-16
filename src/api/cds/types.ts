import { EnvoyCluster } from "../envoycluster/types";

/**
 * Cds查询参数
 */
export interface CdsQuery extends PageQuery {
  name: string | undefined;
  envoyClusterId: number | undefined;
}

/**
 * Cds类型
 */
export interface Cds {
  id: number;
  name: string;
  enable: boolean;
  valuedata: string;
  type: string;
  dnslookupfamily: number;
  healthcheck: boolean;
  lbpolicy: number;
  envoyCluster: EnvoyCluster
}

export type CdsPageResult = PageResult<Cds[]>;
