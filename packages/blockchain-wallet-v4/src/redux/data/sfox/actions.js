import * as AT from './actionTypes'

export const fetchQuote = (data) => ({ type: AT.FETCH_QUOTE, payload: data })
export const fetchQuoteLoading = () => ({ type: AT.FETCH_QUOTE_LOADING })
export const fetchQuoteSuccess = (data) => ({ type: AT.FETCH_QUOTE_SUCCESS, payload: data })
export const fetchQuoteFailure = (error) => ({ type: AT.FETCH_QUOTE_FAILURE, payload: error })

export const fetchTrades = (data) => ({ type: AT.FETCH_TRADES, payload: data })
export const fetchTradesLoading = () => ({ type: AT.FETCH_TRADES_LOADING })
export const fetchTradesSuccess = (data) => ({ type: AT.FETCH_TRADES_SUCCESS, payload: data })
export const fetchTradesFailure = (error) => ({ type: AT.FETCH_TRADES_FAILURE, payload: error })

export const fetchProfile = (data) => ({ type: AT.FETCH_PROFILE, payload: data })
export const fetchProfileLoading = () => ({ type: AT.FETCH_PROFILE_LOADING })
export const fetchProfileSuccess = (data) => ({ type: AT.FETCH_PROFILE_SUCCESS, payload: data })
export const fetchProfileFailure = (error) => ({ type: AT.FETCH_PROFILE_FAILURE, payload: error })

export const fetchAccounts = () => ({ type: AT.FETCH_ACCOUNTS, payload: {} })
export const fetchAccountsLoading = () => ({ type: AT.FETCH_ACCOUNTS_LOADING })
export const fetchAccountsSuccess = (data) => ({ type: AT.FETCH_ACCOUNTS_SUCCESS, payload: data })
export const fetchAccountsFailure = (error) => ({ type: AT.FETCH_ACCOUNTS_FAILURE, payload: error })

export const handleTrade = (data) => ({ type: AT.HANDLE_TRADE, payload: data })
export const handleTradeLoading = () => ({ type: AT.HANDLE_TRADE_LOADING })
export const handleTradeSuccess = (data) => ({ type: AT.HANDLE_TRADE_SUCCESS, payload: data })
export const handleTradeFailure = (error) => ({ type: AT.HANDLE_TRADE_FAILURE, payload: error })

export const setProfile = (data) => ({ type: AT.SET_PROFILE, payload: data })
export const setProfileSuccess = (data) => ({ type: AT.SET_PROFILE_SUCCESS, payload: data })
export const setProfileFailure = (error) => ({ type: AT.SET_PROFILE_FAILURE, payload: error })

export const setNextAddress = (data) => ({ type: AT.SET_NEXT_ADDRESS, payload: data })
