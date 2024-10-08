import {
  __federation_method_getRemote,
  __federation_method_setRemote,
} from "__federation__";
import {
  ComponentPropsWithoutRef,
  ComponentType,
  FC,
  lazy,
  LazyExoticComponent,
  memo,
  Suspense,
  useEffect,
  useState,
} from "react";

type AnyPropsComponent = ComponentType<Record<string, unknown>>;

type RemoteComponentProps = {
  moduleName: string;
  url: string;
} & ComponentPropsWithoutRef<AnyPropsComponent>;

export const RemoteComponent: FC<RemoteComponentProps> = memo(
  ({ moduleName, url, ...props }) => {
    const [Remote, setRemote] =
      useState<LazyExoticComponent<AnyPropsComponent>>();

    useEffect(() => {
      __federation_method_setRemote(moduleName, {
        url: () => Promise.resolve(`${url}/assets/remoteEntry.js`),
        format: "esm",
        from: "vite",
      });

      setRemote(
        lazy(() => {
          return __federation_method_getRemote(moduleName, "./App");
        })
      );
    }, [url, moduleName]);

    if (!Remote) {
      return null;
    }

    return (
      <Suspense fallback={"Loading..."}>
        <Remote {...props} />
      </Suspense>
    );
  }
);
