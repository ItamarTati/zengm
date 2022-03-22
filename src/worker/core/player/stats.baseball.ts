// raw: recorded directly in game sim
// derived: still stored in database, but not directly recorded in game sim
// not present in this file: transiently derived things, like FG%
const stats = {
	derived: [] as const,
	raw: [
		// Batting
		"gp",
		"pa",
		"r",
		"h",
		"2b",
		"3b",
		"hr",
		"rbi",
		"sb",
		"cs",
		"bb",
		"so",
		"gdp",
		"hbp",
		"sh",
		"sf",
		"ibb",

		// Pitching
		"w",
		"l",
		"gPit",
		"gs",
		"gf",
		"cg",
		"sho",
		"sv",
		"ip",
		"rPit",
		"er",
		"hPit",
		"2bPit",
		"3bPit",
		"hrPit",
		"bbPit",
		"soPit",
		"ibbPit",
		"hbpPit",
		"shPit",
		"sfPit",
		"bk",
		"wp",
		"bf",
	] as const,
	max: [
		// Batting
		"paMax",
		"rMax",
		"hMax",
		"2bMax",
		"3bMax",
		"hrMax",
		"rbiMax",
		"sbMax",
		"csMax",
		"bbMax",
		"soMax",
		"gdpMax",
		"hbpMax",
		"shMax",
		"sfMax",
		"ibbMax",

		// Batting derived
		"abMax",
		"tbMax",

		// Pitching
		"ipMax",
		"rPitMax",
		"erMax",
		"hPitMax",
		"2bPitMax",
		"3bPitMax",
		"hrPitMax",
		"bbPitMax",
		"soPitMax",
		"ibbPitMax",
		"hbpPitMax",
		"shPitMax",
		"sfPitMax",
		"bkMax",
		"wpMax",
		"bfMax",
	] as const,
};

export default stats;
