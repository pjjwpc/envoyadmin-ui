import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { RdsQuery, RdsPageResult } from './types';

/**
 * cluster列表
 *
 * @param queryParams
 */
export function list(queryParams?: RdsQuery): AxiosPromise<RdsPageResult> {
    return request({
        url: '/envoy/rds/',
        method: 'get',
        params: queryParams
    });
}

export function add(envoyClusterId: number, ldsId: number, version: string, valueData: string) {
    return request({
        url: '/envoy/rds/?envoyClusterId=' + envoyClusterId + "&ldsId=" + ldsId + "&version=" + version,
        method: 'post',
        data: valueData
    });
}

export function update(rdsId: number, version: string, valueData: string) {
    return request({
        url: '/envoy/rds/?rdsId=' + rdsId + '&version=' + version,
        method: 'patch',
        data: valueData
    });
}
