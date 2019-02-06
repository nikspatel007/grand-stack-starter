export default /* GraphQL */ `
  mutation {
    b1: CreateBuilding(id: "befa11e3-95a2-4a77-94f9-eaabb6c14b78",name:"cohesionHQ", description: "Our First Building" ) {
      id
      name
      description
    }
    t1: CreateTower(id: "5be279d2-0c92-40dc-9f22-9fc91e87379a", name: "Alpha", description: "Alpha Tower") {
      id
      name
      description
    }
    t1b1: AddBuildingTowers(from: { id: "5be279d2-0c92-40dc-9f22-9fc91e87379a" }, to: { id: "befa11e3-95a2-4a77-94f9-eaabb6c14b78" }) {
      from {
        id
      }
    }
    f1: CreateFloor(id: "52185770-8d06-400b-998b-5d1308c528a2", code:"B01", name:"Lower LL", description: "Lower Level", elevation: "-14'-6") {
      id
      name
      description
      elevation
    }
    f2: CreateFloor(id: "8289af5b-7f4f-4d5c-9e53-e5d7124a776a", code:"F01", name:"Level 01", description: "Level 1", elevation: "0'-0") {
      id
      name
      description
      elevation
    }
    f3: CreateFloor(id: "6b1ada53-c2f1-4862-82af-b92b7d36a59c", code:"F01M", name:"Level 01 Mezzanine", description: "Level 01 Mezzanine", elevation: "-11'-5.5") {
      id
      name
      description
      elevation
    }
    f4: CreateFloor(id: "6548ddd0-5c10-4bf2-9390-e6f49ef7eb0b", code:"F02", name:"Level 02", description: "Level 02", elevation: "-23'-0") {
      id
      name
      description
      elevation
    }
    f5: CreateFloor(id: "ccf840c9-9703-47a3-9011-a3af830c579f", code:"F02M", name:"Level 02", description: "Level 02 Mezzanine", elevation: "-34'-7") {
      id
      name
      description
      elevation
    }
    f6: CreateFloor(id: "679617fa-887b-4738-8e22-68f625aa6be4", code:"F03", name:"Level 03", description: "Level 03", elevation: "-46'-2") {
      id
      name
      description
      elevation
    }
  }
`;
