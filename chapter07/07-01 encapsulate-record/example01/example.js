let result = "";

// 리팩터링 전
result += `<h1>${organization.name}</h1>`;
organization.name = "NewCo";

// 리팩터링 후
result += `<h1>${getOrganization().name}</h1>`;
getOrganization().name = "NewCo";
