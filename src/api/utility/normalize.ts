import * as changeKeys from "change-case/keys";
import omit from "just-omit";

function normalizeObjectForDatabase(obj: {}, omitKeys: Array<keyof typeof obj> = []) {
	return changeKeys.snakeCase(omitKeys.length ? omit(obj, omitKeys) : obj);
}

function normalizeObjectForApp(obj: {}, omitKeys: Array<keyof typeof obj> = []) {
	return changeKeys.camelCase(omitKeys.length ? omit(obj, omitKeys) : obj);
}

export { normalizeObjectForDatabase, normalizeObjectForApp };
