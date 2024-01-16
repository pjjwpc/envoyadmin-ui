import { EnvoyCluster } from "../envoycluster/types";

/**
 * Cds查询参数
 */
export interface VhdsQuery extends PageQuery {
    name: string | undefined;
    envoyClusterId:number|undefined;
}

/**
 * Cds类型
 */
export interface Vhds {
    id: string;
    name: string;
    enable: boolean;
    valuedata: string;
    envoyCluster:EnvoyCluster
}

export type VhdsPageResult = PageResult<Vhds[]>;

export interface VhdsDetailQuery extends PageQuery{
    envoyClusterId:number;
    route:string;
}

export type VhdsDetailPageResult=PageResult<VhdsDetail[]>;

export interface VhdsDetail{
    id:number;
    vhdsId:number;
    envoyCluster:string;
    domain:Array<string>;
    path:string;
    clusterName:string;
    version:string;
    valueData:string;
    endpoint:Array<VhdsEndpoint>;
}

export interface VhdsEndpoint{
    address:string;
    port:number;
}
