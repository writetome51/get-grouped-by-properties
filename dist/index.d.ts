export declare const getGroupedByProperties: <T>(
	properties: string[],
	objects: T[],
	matchFunctions?: { [property: string]: (a: any, b: any) => boolean; }
) => Array<T[]>;
