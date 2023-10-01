import Server from '../server/Server'

export default class Client extends Server {
  constructor() {
    super()
    return new Proxy(this, {
      get(target, p) {
        const property = (target as any)[p]

        if (property instanceof Function)
          return async (...args: any[]) =>
            JSON.parse(
              JSON.stringify(
                await (property as Function).apply(
                  target,
                  JSON.parse(JSON.stringify(args))
                )
              )
            )

        return property
      },
    })
  }
}
