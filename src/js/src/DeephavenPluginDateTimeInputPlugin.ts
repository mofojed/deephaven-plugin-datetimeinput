import { type WidgetPlugin, PluginType } from "@deephaven/plugin";
import { vsGraph } from "@deephaven/icons";
import { DeephavenPluginDateTimeInput } from "./DeephavenPluginDateTimeInput";

// Register the plugin with Deephaven
export const DeephavenPluginDateTimeInputPlugin: WidgetPlugin = {
  // The name of the plugin
  name: "@deephaven/js-plugin-datetimeinput",
  // The type of plugin - this will generally be WIDGET_PLUGIN
  type: PluginType.WIDGET_PLUGIN,
  // The supported types for the plugin. This should match the value returned by `name`
  // in DeephavenPluginDateTimeInputType in deephaven_plugin_datetimeinput_type.py
  supportedTypes: "DeephavenPluginDateTimeInput",
  // The component to render for the plugin
  component: DeephavenPluginDateTimeInput,
  // The icon to display for the plugin
  icon: vsGraph,
};

export default DeephavenPluginDateTimeInputPlugin;
