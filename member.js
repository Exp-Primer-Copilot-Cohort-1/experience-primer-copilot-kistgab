function skillsMember() {
  return {
    restrict: "E",
    scope: {
      member: "=",
    },
    templateUrl: "views/templates/skills-member.html",
  };
}
