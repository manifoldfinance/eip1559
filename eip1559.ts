/**
 * This module is a standalone HTTP service enabling to submit Ethereum transactions. 
 * DO NOT MODIFY - This file has been generated using zgres.
 * See https://www.npmjs.com/package/zgres
 */
import * as Zgres from "zgres/lib/runtime";
import * as QS from "zgres/lib/runtime/query";
export const defaults: Zgres.RequestOpts = {
    baseUrl: "http://localhost:8080",
};
const zgres = Zgres.runtime(defaults);
export const servers = {
    server1: ({}: {}) => `http://localhost:8080${,
    server2: ({}: {}) => `http://eip1559-tx.ops.backbone.xyz:8080/${
};
export type GetBasefeeResponse = {
    baseFee?: string;
};
export type ExceptionResponseBody = {
    errorCode?: number;
    errorLabel?: string;
    errorMessage?: string;
};
export type Transaction = {
    nonce?: number;
    to: string;
    value: number;
    gasPrice?: number;
    gasLimit: number;
};
export type SubmitTransactionResponse = {
    transactionHash?: string;
};
export type EIP1559Transaction = {
    nonce?: number;
    to: string;
    value: number;
    gasPrice?: number;
    gasLimit: number;
    minerBribe: number;
    feecap: number;
};
/**
 * Retrieve the latest base fee
 */
export function getBaseFee(opts?: Zgres.RequestOpts) {
    return zgres.fetchJson<{
        status: 200;
        data: GetBasefeeResponse;
    } | {
        status: 400;
        data: {
            [key: string]: string;
        };
    } | {
        status: 500;
        data: ExceptionResponseBody;
    }>("/basefee", {
        ...opts
    });
}
/**
 * Retrieve the base fee at given block
 */
export function getBaseFee1(block: string, opts?: Zgres.RequestOpts) {
    return zgres.fetchJson<{
        status: 200;
        data: GetBasefeeResponse;
    } | {
        status: 400;
        data: {
            [key: string]: string;
        };
    } | {
        status: 500;
        data: ExceptionResponseBody;
    }>(`/basefee/${block}`, {
        ...opts
    });
}
/**
 * Submit a legacy Ethereum transaction
 */
export function submitTransaction(privateKey: string, transaction: Transaction, opts?: Zgres.RequestOpts) {
    return zgres.fetchJson<{
        status: 200;
        data: SubmitTransactionResponse;
    } | {
        status: 400;
        data: {
            [key: string]: string;
        };
    } | {
        status: 500;
        data: ExceptionResponseBody;
    }>(`/tx/legacy/${privateKey}`, zgres.json({
        ...opts,
        method: "POST",
        body: transaction
    }));
}
/**
 * Submit an EIP-1559 Ethereum transaction
 */
export function submitTransaction1(privateKey: string, eip1559Transaction: EIP1559Transaction, opts?: Zgres.RequestOpts) {
    return zgres.fetchJson<{
        status: 200;
        data: SubmitTransactionResponse;
    } | {
        status: 400;
        data: {
            [key: string]: string;
        };
    } | {
        status: 500;
        data: ExceptionResponseBody;
    }>(`/tx/eip1559/${privateKey}`, zgres.json({
        ...opts,
        method: "POST",
        body: eip1559Transaction
    }));
}

