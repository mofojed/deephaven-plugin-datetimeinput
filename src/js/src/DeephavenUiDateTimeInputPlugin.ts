import { type WidgetPlugin, PluginType } from "@deephaven/plugin";
import { vsGraph } from "@deephaven/icons";
import { DeephavenUiDateTimeInput } from "./DeephavenUiDateTimeInput";

// Register the plugin with Deephaven
export const DeephavenUiDateTimeInputPlugin: WidgetPlugin = {
  // The name of the plugin
  name: "deephaven-ui-datetimeinput",
  // The type of plugin - this will generally be WIDGET_PLUGIN
  type: PluginType.WIDGET_PLUGIN,
  // The supported types for the plugin. This should match the value returned by `name`
  // in DeephavenUiDateTimeInputType in deephaven_ui_datetimeinput_type.py
  supportedTypes: "DeephavenUiDateTimeInput",
  // The component to render for the plugin
  component: DeephavenUiDateTimeInput,
  // The icon to display for the plugin
  icon: vsGraph,
};

export default DeephavenUiDateTimeInputPlugin;
