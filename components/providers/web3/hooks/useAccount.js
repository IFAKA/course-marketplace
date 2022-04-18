import { useEffect } from "react"
import useSWR from "swr"

const adminAddresses = {
  "0x118915984dd5c328f0bb9e35a1c7b72d250d77519e164ea0f3330f2290e9643e": true
}

export const handler = (web3, provider) => () => {

  const { data, mutate, ...rest } = useSWR(() =>
    web3 ? "web3/accounts" : null,
    async () => {
      const accounts = await web3.eth.getAccounts()
      const account = accounts[0]
      if (!account) { throw new Error("Cannot retrieve the account, refresh page.") }
      return account
    }
  )

  useEffect(() => {
    const mutator = accounts => mutate(accounts[0] ?? null)
    provider?.on("accountsChanged", mutator)
    return () => provider?.removeListener("accountsChanged", mutator)
  }, [mutate]) // [provider, mutate]

  return {
    data,
    isAdmin: (
      data &&
      adminAddresses[web3.utils.keccak256(data)]) ?? false,
    mutate,
    ...rest
  }
}
