describe("countUpBy", function(countTo, countBy) {
  it("counts up to X by increments of Y", function () {
    expect(countUpBy(30, 5)).to.eql([0, 5, 10, 15, 20, 25, 30]);
  });
});
