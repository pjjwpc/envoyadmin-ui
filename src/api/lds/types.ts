import { EnvoyCluster } from "../envoycluster/types";

/**
 * Cds查询参数
 */
export interface LdsQuery extends PageQuery {
    name: string | undefined;
    envoyClusterId:number|undefined;
}

/**
 * Cds类型
 */
export interface Lds {
    id: string;
    name: string;
    enable: boolean;
    port: number;
    protocol: string;
    valuedata: string;
    envoyCluster: EnvoyCluster
}

export type LdsPageResult = PageResult<Lds[]>;
