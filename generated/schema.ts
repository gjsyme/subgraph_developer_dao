// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Developer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Developer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Developer entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Developer", id.toString(), this);
    }
  }

  static load(id: string): Developer | null {
    return changetype<Developer | null>(store.get("Developer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes | null {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set owner(value: Bytes | null) {
    if (!value) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromBytes(<Bytes>value));
    }
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get clothing(): string | null {
    let value = this.get("clothing");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set clothing(value: string | null) {
    if (!value) {
      this.unset("clothing");
    } else {
      this.set("clothing", Value.fromString(<string>value));
    }
  }

  get industry(): string | null {
    let value = this.get("industry");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set industry(value: string | null) {
    if (!value) {
      this.unset("industry");
    } else {
      this.set("industry", Value.fromString(<string>value));
    }
  }

  get language(): string | null {
    let value = this.get("language");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set language(value: string | null) {
    if (!value) {
      this.unset("language");
    } else {
      this.set("language", Value.fromString(<string>value));
    }
  }

  get location(): string | null {
    let value = this.get("location");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set location(value: string | null) {
    if (!value) {
      this.unset("location");
    } else {
      this.set("location", Value.fromString(<string>value));
    }
  }

  get mind(): string | null {
    let value = this.get("mind");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set mind(value: string | null) {
    if (!value) {
      this.unset("mind");
    } else {
      this.set("mind", Value.fromString(<string>value));
    }
  }

  get os(): string | null {
    let value = this.get("os");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set os(value: string | null) {
    if (!value) {
      this.unset("os");
    } else {
      this.set("os", Value.fromString(<string>value));
    }
  }

  get textEditor(): string | null {
    let value = this.get("textEditor");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set textEditor(value: string | null) {
    if (!value) {
      this.unset("textEditor");
    } else {
      this.set("textEditor", Value.fromString(<string>value));
    }
  }

  get vibe(): string | null {
    let value = this.get("vibe");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set vibe(value: string | null) {
    if (!value) {
      this.unset("vibe");
    } else {
      this.set("vibe", Value.fromString(<string>value));
    }
  }
}