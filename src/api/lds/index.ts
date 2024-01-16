import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { LdsQuery, LdsPageResult } from './types';

/**
 * cluster列表
 *
 * @param queryParams
 */
export function list(queryParams?: LdsQuery): AxiosPromise<LdsPageResult> {
    return request({
        url: '/envoy/lds/',
        method: 'get',
        params: queryParams
    });
}

export function add(envoyClusterId: number,version:string, valueData: string) {
    return request({
        url: '/envoy/lds/?envoyClusterId=' + envoyClusterId+"&version="+version,
        method: 'post',
        data: valueData
    });
}

export function update(ldsId: number, version: string, valueData: string) {
    return request({
        url: '/envoy/lds/?ldsId=' + ldsId + '&version=' + version,
        method: 'patch',
        data: valueData
    });
}
