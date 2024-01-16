import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { VhdsQuery, VhdsPageResult,VhdsDetailQuery,VhdsDetailPageResult } from './types';

/**
 * cluster列表
 *
 * @param queryParams
 */
export function list(queryParams?: VhdsQuery): AxiosPromise<VhdsPageResult> {
    return request({
        url: '/envoy/vhds/',
        method: 'get',
        params: queryParams
    });
}

export function add(envoyClusterId: number,version:string, valueData: string) {
    return request({
        url: '/envoy/vhds/?envoyClusterId=' + envoyClusterId+"&version="+version,
        method: 'post',
        data: valueData
    });
}

export function update(vhdsId: number, version: string, valueData: string) {
    return request({
        url: '/envoy/vhds/?vhdsId=' + vhdsId + '&version=' + version,
        method: 'patch',
        data: valueData
    });
}

export function traceroute(queryParams?:VhdsDetailQuery):AxiosPromise<VhdsDetailPageResult>{
    return request({
        url:'/envoy/vhds/traceroute',
        method:'get',
        params:queryParams
    });
}
