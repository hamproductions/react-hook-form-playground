/* tslint:disable */
/* eslint-disable */
/**
 * PokéAPI
 * All the Pokémon data you\'ll ever need in one place, easily accessible through a modern free open-source RESTful API.  ## What is this?  This is a full RESTful API linked to an extensive database detailing everything about the Pokémon main game series.  We\'ve covered everything from Pokémon to Berry Flavors.  ## Where do I start?  We have awesome [documentation](https://pokeapi.co/docs/v2) on how to use this API. It takes minutes to get started.  This API will always be publicly available and will never require any extensive setup process to consume.  Created by [**Paul Hallett**(]https://github.com/phalt) and other [**PokéAPI contributors***](https://github.com/PokeAPI/pokeapi#contributing) around the world. Pokémon and Pokémon character names are trademarks of Nintendo.
 *
 * The version of the OpenAPI document: 2.7.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { AbilityDetailPokemonInnerPokemon } from "./AbilityDetailPokemonInnerPokemon";
import {
  AbilityDetailPokemonInnerPokemonFromJSON,
  AbilityDetailPokemonInnerPokemonFromJSONTyped,
  AbilityDetailPokemonInnerPokemonToJSON,
} from "./AbilityDetailPokemonInnerPokemon";
import type { ItemDetailHeldByPokemonInnerVersionDetailsInner } from "./ItemDetailHeldByPokemonInnerVersionDetailsInner";
import {
  ItemDetailHeldByPokemonInnerVersionDetailsInnerFromJSON,
  ItemDetailHeldByPokemonInnerVersionDetailsInnerFromJSONTyped,
  ItemDetailHeldByPokemonInnerVersionDetailsInnerToJSON,
} from "./ItemDetailHeldByPokemonInnerVersionDetailsInner";

/**
 *
 * @export
 * @interface PokemonDetailHeldItems
 */
export interface PokemonDetailHeldItems {
  /**
   *
   * @type {AbilityDetailPokemonInnerPokemon}
   * @memberof PokemonDetailHeldItems
   */
  item: AbilityDetailPokemonInnerPokemon;
  /**
   *
   * @type {Array<ItemDetailHeldByPokemonInnerVersionDetailsInner>}
   * @memberof PokemonDetailHeldItems
   */
  versionDetails: Array<ItemDetailHeldByPokemonInnerVersionDetailsInner>;
}

/**
 * Check if a given object implements the PokemonDetailHeldItems interface.
 */
export function instanceOfPokemonDetailHeldItems(
  value: object
): value is PokemonDetailHeldItems {
  if (!("item" in value) || value["item"] === undefined) return false;
  if (!("versionDetails" in value) || value["versionDetails"] === undefined)
    return false;
  return true;
}

export function PokemonDetailHeldItemsFromJSON(
  json: any
): PokemonDetailHeldItems {
  return PokemonDetailHeldItemsFromJSONTyped(json, false);
}

export function PokemonDetailHeldItemsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PokemonDetailHeldItems {
  if (json == null) {
    return json;
  }
  return {
    item: AbilityDetailPokemonInnerPokemonFromJSON(json["item"]),
    versionDetails: (json["version_details"] as Array<any>).map(
      ItemDetailHeldByPokemonInnerVersionDetailsInnerFromJSON
    ),
  };
}

export function PokemonDetailHeldItemsToJSON(
  value?: PokemonDetailHeldItems | null
): any {
  if (value == null) {
    return value;
  }
  return {
    item: AbilityDetailPokemonInnerPokemonToJSON(value["item"]),
    version_details: (value["versionDetails"] as Array<any>).map(
      ItemDetailHeldByPokemonInnerVersionDetailsInnerToJSON
    ),
  };
}
