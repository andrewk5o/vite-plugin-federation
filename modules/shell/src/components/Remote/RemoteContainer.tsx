import { FC, memo } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { RemoteComponent } from ".";
import { Module } from "../../entity/module";

export const RemoteContainer: FC = memo(() => {
  const { moduleName } = useParams();

  const { modules, count, setCount } = useOutletContext<{
    modules: Module[];
    count: number;
    setCount: (count: number) => void;
  }>();

  const url = modules.find((module) => module.name === moduleName)?.url;

  if (!moduleName || !url) {
    return null;
  }

  return (
    <RemoteComponent
      moduleName={moduleName}
      url={url}
      count={count}
      setCount={setCount}
    />
  );
});
