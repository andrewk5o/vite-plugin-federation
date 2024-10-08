declare module "__federation__" {
  export function __federation_method_setRemote(
    name: string,
    options: { format: string; from: string; url: () => Promise<string> }
  ): void;
  export function __federation_method_getRemote(
    name: string,
    module: string
  ): Promise<Component>;
}
