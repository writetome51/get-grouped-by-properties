export declare function getGroupedByProperties(
	properties: string[],
	objects: object[],
	matchFunctions?: { [property: string]: (a: any, b: any) => boolean; }
): Array<object[]>;
