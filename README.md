# SRPG-Automatic-Enemy-Stats
original by Goinza, added difficulty growth modifiers

works just like class growths, go to difficulty -> custom params and put the values in

EXAMPLE

Easy

{
growths: {
	mhp: -5,
	str: -5,
	skl: -5,
	spd: -5,
	def: -5,
	res: -5,
	luk: -5
}
}

Hard

{
growths: {
	mhp: 10,
	str: 5,
	skl: 5,
	spd: 5,
	def: 5,
	res: 5,
	luk: 5
}
}

MINOR BUG: when using unit bases, if an event enemy is loaded at the start of the map without wait, it will get applied twice
