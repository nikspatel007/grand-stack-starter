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
    f1t1: AddFloorTower(from : {id: "52185770-8d06-400b-998b-5d1308c528a2"}, to: { id: "5be279d2-0c92-40dc-9f22-9fc91e87379a"}) {
      from {
        id
      }
    }

    f2: CreateFloor(id: "8289af5b-7f4f-4d5c-9e53-e5d7124a776a", code:"F01", name:"Level 01", description: "Level 1", elevation: "0'-0") {
      id
      name
      description
      elevation
    }
    f2t1: AddFloorTower(from : {id: "8289af5b-7f4f-4d5c-9e53-e5d7124a776a"}, to: { id: "5be279d2-0c92-40dc-9f22-9fc91e87379a"}) {
      from {
        id
      }
    }

    f3: CreateFloor(id: "6b1ada53-c2f1-4862-82af-b92b7d36a59c", code:"F01M", name:"Level 01 Mezzanine", description: "Level 01 Mezzanine", elevation: "-11'-5.5") {
      id
      name
      description
      elevation
    }
    f3t1: AddFloorTower(from : {id: "6b1ada53-c2f1-4862-82af-b92b7d36a59c"}, to: { id: "5be279d2-0c92-40dc-9f22-9fc91e87379a"}) {
      from {
        id
      }
    }
   
    f4: CreateFloor(id: "6548ddd0-5c10-4bf2-9390-e6f49ef7eb0b", code:"F02", name:"Level 02", description: "Level 02", elevation: "-23'-0") {
      id
      name
      description
      elevation
    }
    f4t1: AddFloorTower(from : {id: "6548ddd0-5c10-4bf2-9390-e6f49ef7eb0b"}, to: { id: "5be279d2-0c92-40dc-9f22-9fc91e87379a"}) {
      from {
        id
      }
    }

    f5: CreateFloor(id: "ccf840c9-9703-47a3-9011-a3af830c579f", code:"F02M", name:"Level 02", description: "Level 02 Mezzanine", elevation: "-34'-7") {
      id
      name
      description
      elevation
    }
    f5t1: AddFloorTower(from : {id: "ccf840c9-9703-47a3-9011-a3af830c579f"}, to: { id: "5be279d2-0c92-40dc-9f22-9fc91e87379a"}) {
      from {
        id
      }
    }

    f6: CreateFloor(id: "679617fa-887b-4738-8e22-68f625aa6be4", code:"F03", name:"Level 03", description: "Level 03", elevation: "-46'-2") {
      id
      name
      description
      elevation
    }
    f6t1: AddFloorTower(from : {id: "679617fa-887b-4738-8e22-68f625aa6be4"}, to: { id: "5be279d2-0c92-40dc-9f22-9fc91e87379a"}) {
      from {
        id
      }
    }
    s1: CreateSpace(id: "ca7fd90d-beb6-4d28-8fbd-629b0703c481", name:"cohesionReception", description: "cohesionIB HQ reception") {
      id
      name
    }

    s1f1: AddSpaceFloor(from: {id: "ca7fd90d-beb6-4d28-8fbd-629b0703c481"}, to: {id: "8289af5b-7f4f-4d5c-9e53-e5d7124a776a"}) {
      from {
        id
      }
    }

    s2: CreateSpace(id: "7c50d541-734b-40b6-9e46-5ab9cf2b6fa6", name:"cohesionCafeteria", description: "cohesionIB HQ Cafeteria") {
      id
      name
    }

    s2f2: AddSpaceFloor(from: {id: "7c50d541-734b-40b6-9e46-5ab9cf2b6fa6"}, to: {id: "6548ddd0-5c10-4bf2-9390-e6f49ef7eb0b"}) {
      from {
        id
      }
    }

    s3: CreateSpace(id: "7a6f6019-9b85-4afc-90e9-8fd321ad0e86", name:"cohesionDevelopmentSuite", description: "cohesionIB HQ Development suite") {
      id
      name
    }

    s3f2: AddSpaceFloor(from: {id: "7a6f6019-9b85-4afc-90e9-8fd321ad0e86"}, to: {id: "6548ddd0-5c10-4bf2-9390-e6f49ef7eb0b"}) {
      from {
        id
      }
    }
    s4: CreateSpace(id: "67ada60a-f8e4-49fa-b887-c6b9324671be", name:"cohesionConference1", description: "cohesionIB HQ Conference Room: Ahmedabad") {
      id
      name
    }
    s4f2: AddSpaceFloor(from: {id: "67ada60a-f8e4-49fa-b887-c6b9324671be"}, to: {id: "6548ddd0-5c10-4bf2-9390-e6f49ef7eb0b"}) {
      from {
        id
      }
    }

    s5: CreateSpace(id: "4e9abf22-2be1-40f0-8b90-2b1bd65d231e", name:"cohesionConference2", description: "cohesionIB HQ Conference Room: Bangalore") {
      id
      name
    }
    s5f2: AddSpaceFloor(from: {id: "4e9abf22-2be1-40f0-8b90-2b1bd65d231e"}, to: {id: "6548ddd0-5c10-4bf2-9390-e6f49ef7eb0b"}) {
      from {
        id
      }
    }

    s6: CreateSpace(id: "d3cfaebf-2baf-4c71-9f3a-d5f9cbc495bd", name:"mailRoom", description: "cohesionIB HQ MailRoom") {
      id
      name
    }
    s6f3: AddSpaceFloor(from: {id: "d3cfaebf-2baf-4c71-9f3a-d5f9cbc495bd"}, to: {id: "6b1ada53-c2f1-4862-82af-b92b7d36a59c"}) {
      from {
        id
      }
    }

    s7: CreateSpace(id: "989bf9eb-ba17-4101-988f-a1848f26f5bb", name:"storeRoom", description: "cohesionIB HQ StoreRoom") {
      id
      name
    }
    s7f3: AddSpaceFloor(from: {id: "989bf9eb-ba17-4101-988f-a1848f26f5bb"}, to: {id: "6b1ada53-c2f1-4862-82af-b92b7d36a59c"}) {
      from {
        id
      }
    }
    sz1: CreateSpaceZone(id: "d6a5655a-2ff2-4e22-968e-abfe8a73c25e", name:"cohesionReception", code:"cib-r", description:"Ground floor reception", type:TenantSuite) {
      id
      name
      code
    }

    sz2: CreateSpaceZone(id: "36c00e4b-c659-4026-b866-829a16047930", name:"cohesionOffice", code:"cib-o", description:"cohesion Offices", type:TenantSuite) {
      id
      name
      code
    }

    sz3: CreateSpaceZone(id: "5696eecd-a4ee-4714-b16a-5da897fad739", name:"utility", code:"jbc-u", description:"Utility Areas", type:BuildingArea) {
      id
      name
      code
    }

    s1sz1: AddSpaceSpaceZone(from: {id: "ca7fd90d-beb6-4d28-8fbd-629b0703c481"}, to: {id: "d6a5655a-2ff2-4e22-968e-abfe8a73c25e"}) {
      from {
        id
      }
    }

    s2sz2: AddSpaceSpaceZone(from: {id: "7c50d541-734b-40b6-9e46-5ab9cf2b6fa6"}, to: {id: "36c00e4b-c659-4026-b866-829a16047930"}) {
      from {
        id
      }
    }
    s3sz2: AddSpaceSpaceZone(from: {id: "7a6f6019-9b85-4afc-90e9-8fd321ad0e86"}, to: {id: "36c00e4b-c659-4026-b866-829a16047930"}) {
      from {
        id
      }
    }
    s4sz2: AddSpaceSpaceZone(from: {id: "67ada60a-f8e4-49fa-b887-c6b9324671be"}, to: {id: "36c00e4b-c659-4026-b866-829a16047930"}) {
      from {
        id
      }
    }
    s5sz2: AddSpaceSpaceZone(from: {id: "4e9abf22-2be1-40f0-8b90-2b1bd65d231e"}, to: {id: "36c00e4b-c659-4026-b866-829a16047930"}) {
      from {
        id
      }
    }
    s6sz3: AddSpaceSpaceZone(from: {id: "d3cfaebf-2baf-4c71-9f3a-d5f9cbc495bd"}, to: {id: "5696eecd-a4ee-4714-b16a-5da897fad739"}) {
      from {
        id
      }
    }
    s7sz3: AddSpaceSpaceZone(from: {id: "989bf9eb-ba17-4101-988f-a1848f26f5bb"}, to: {id: "5696eecd-a4ee-4714-b16a-5da897fad739"}) {
      from {
        id
      }
    }

    c1: CreateCompany(id:"fe4d1042-d203-4668-aaf3-d951ec5200cd", name:"cohesionIB", description:"cohesionIB Inc.") {
      id
      name
    }
    c2: CreateCompany(id:"f0958ee1-6786-4159-883f-544caf783ff1", name:"JBC", description:"John Buck Company Inc.") {
      id
      name
    }

    sz1c1: AddSpaceZoneCompany(from: {id: "d6a5655a-2ff2-4e22-968e-abfe8a73c25e"}, to: { id:"fe4d1042-d203-4668-aaf3-d951ec5200cd"}) {
      from {
        id
      }
    }

    sz2c1: AddSpaceZoneCompany(from: {id: "36c00e4b-c659-4026-b866-829a16047930"}, to: { id:"fe4d1042-d203-4668-aaf3-d951ec5200cd"}) {
      from {
        id
      }
    }

    sz2c2: AddSpaceZoneCompany(from: {id: "5696eecd-a4ee-4714-b16a-5da897fad739"}, to: { id:"f0958ee1-6786-4159-883f-544caf783ff1"}) {
      from {
        id
      }
    }

    c1b1: AddCompanyBuilding(from: {id:"fe4d1042-d203-4668-aaf3-d951ec5200cd"}, to:{id: "befa11e3-95a2-4a77-94f9-eaabb6c14b78"}) {
      from {
        id
      }
    }

    c2b1: AddCompanyBuilding(from: {id:"f0958ee1-6786-4159-883f-544caf783ff1"}, to:{id: "befa11e3-95a2-4a77-94f9-eaabb6c14b78"}) {
      from {
        id
      }
    }
  }
`;
