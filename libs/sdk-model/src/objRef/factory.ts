// (C) 2020 GoodData Corporation
import { Identifier, Uri, IdentifierRef, UriRef, LocalIdRef, ObjectType } from ".";

/**
 * Creates an IdentifierRef from object identifier and optionally the object type.
 *
 * @remarks see {@link IdentifierRef} for more information about identifier references
 *
 * @param identifier - identifier to use
 * @param type - referenced object type
 * @public
 */
export function idRef(identifier: Identifier, type?: ObjectType): IdentifierRef {
    return type ? { identifier, type } : { identifier };
}

/**
 * Creates an UriRef from an URI
 * @param uri - URI to use
 * @public
 */
export function uriRef(uri: Uri): UriRef {
    return { uri };
}

/**
 * Creates an LocalIdRef from a local identifier
 * @param localIdentifier - local identifier to use
 * @public
 */
export function localIdRef(localIdentifier: Identifier): LocalIdRef {
    return { localIdentifier };
}