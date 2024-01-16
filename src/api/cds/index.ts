import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { CdsQuery, CdsPageResult } from './types';

/**
 * cluster列表
 *
 * @param queryParams
 */
export function list(queryParams?: CdsQuery): AxiosPromise<CdsPageResult> {
    return request({
        url: '/envoy/cds/',
        method: 'get',
        params: queryParams
    });
}

export function add(envoyClusterId: number,version:string, valueData: string) {
    return request({
        url: '/envoy/cds/?envoyClusterId=' + envoyClusterId+"&version="+version,
        method: 'post',
        data: valueData
    });
}

export function update(cdsId: number, version: string, valueData: string) {
    return request({
        url: '/envoy/cds/?cdsId=' + cdsId + '&version=' + version,
        method: 'patch',
        data: valueData
    });
}
