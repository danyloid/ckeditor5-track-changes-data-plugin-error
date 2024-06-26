import { merge } from "lodash";
import { useMemo, useRef } from "react";
import { appConfig } from "../../config/appConfig";

const DEFAULT_CONFIG = {
  collaboration: {
    channelId: appConfig.ckEditorCollaborationId,
  },
  cloudServices: {
    tokenUrl: () => Promise.resolve(appConfig.ckEditorToken),
    webSocketUrl: appConfig.ckEditorWsUrl,
  },
  sidebar: {
    container: undefined,
  },
  presenceList: {
    container: undefined,
  },
  toolbar: [
    "bold",
    "italic",
    "underline",
    "|",
    "undo",
    "redo",
    "findAndReplace",
    "|",
    "comment",
    "commentsArchive",
    "|",
    "trackChanges",
  ],
  findAndReplace: {
    uiType: "dropdown",
  },
  fontSize: {
    options: [10, 12, 14, 16, 18, 20],
    supportAllValues: true,
  },
  language: "en",
  licenseKey: appConfig.ckEditorLicenseKey,
  ui: {
    poweredBy: {
      forceVisible: false,
    },
  },
  watchdogConfig: { crashNumberLimit: 10 },
};

export interface MultiRootEditorConfigurationOptions {
  token: string;
  isLayoutReady: boolean;
}

export const useMultirootEditorConfiguration = (
  options: MultiRootEditorConfigurationOptions
) => {
  const { token, isLayoutReady } = options;
  const presenceContainerRef = useRef<HTMLDivElement>(null);
  const sidebarContainerRef = useRef<HTMLDivElement>(null);

  const config = useMemo(() => {
    return merge({}, DEFAULT_CONFIG, {
      sidebar: {
        container: sidebarContainerRef.current,
      },
      presenceList: {
        container: presenceContainerRef.current,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, isLayoutReady]);

  return {
    config,
    presenceContainerRef,
    sidebarContainerRef,
  };
};
