import { EnvoyCluster } from "../envoycluster/types";

/**
 * Rds查询参数
 */
export interface RdsQuery extends PageQuery {
    name: string | undefined;
    ldsName: string | undefined;
    envoyClusterId:number|undefined;
}

/**
 * Rds类型
 */
export interface Rds {
    id: string;
    name: string;
    enable: boolean;
    valuedata: string;
    envoyCluster:EnvoyCluster
}

export type RdsPageResult = PageResult<Rds[]>;
