import { useLocalStorage } from "@/lib/hooks/use-local-storage";
import { useDirection } from "@/lib/hooks/use-direction";
import { useThemeColor } from "@/lib/hooks/use-theme-color";
import { useSettingsDrawer } from "@/components/settings/settings-context";
import { OptionIcon } from "@/components/icons/option";

export default function SettingsButton() {
  const { opeSettings } = useSettingsDrawer();
  const [layout] = useLocalStorage<string>("Diverse-layout");
  const [themeColor] = useLocalStorage<string>("Diverse-color");

  useDirection(layout ? layout : "ltr");
  useThemeColor(themeColor ? themeColor : "#323743");

  return (
    <>
      <div className="fixed top-1/2 right-0 z-40 -translate-y-1/2">
        <button
          className="flex h-12 w-12 items-center justify-center rounded-l-lg bg-white/80 text-gray-600 shadow-large backdrop-blur dark:bg-brand/80 dark:text-gray-200"
          onClick={opeSettings}
          title="Settings"
        >
          <OptionIcon />
        </button>
      </div>
    </>
  );
}
