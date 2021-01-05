//Plugin by Goinza
// Edited by Colonel S and D MAS

EnemyCalculator = {

    getGrowthValues: function(unitClass) {
        var classGrowths = unitClass.custom.growths;       

        var finalGrowths = {};
        if (classGrowths!=null) {
            if (typeof classGrowths != 'object') {
                throwError033(unitClass);
            }
            
            var all;
            if (classGrowths.all!=null) {
                if (typeof classGrowths.all != 'number') {
                    throwError033(unitClass);
                }
                all = classGrowths.all;
            }
            else {
                all = 0;
            }
    
            if (classGrowths.mhp!=null) {
                if (typeof classGrowths.mhp != 'number') {
                    throwError033(unitClass);
                }
                finalGrowths.mhp = classGrowths.mhp;
            }
            else {
                finalGrowths.mhp = all;
            }
    
            if (classGrowths.str!=null) {
                if (typeof classGrowths.str != 'number') {
                    throwError033(unitClass);
                }
                finalGrowths.str = classGrowths.str;
            }
            else {
                finalGrowths.str = all;
            }
    
            if (classGrowths.mag!=null) {
                if (typeof classGrowths.mag != 'number') {
                    throwError033(unitClass);
                }
                finalGrowths.mag = classGrowths.mag;
            }
            else {
                finalGrowths.mag = all;
            }
    
            if (classGrowths.ski!=null) {
                if (typeof classGrowths.ski != 'number') {
                    throwError033(unitClass);
                }
                finalGrowths.ski = classGrowths.ski;
            }
            else {
                finalGrowths.ski = all;
            }
    
            if (classGrowths.spd!=null) {
                if (typeof classGrowths.spd != 'number') {
                    throwError033(unitClass);
                }
                finalGrowths.spd = classGrowths.spd;
            }
            else {
                finalGrowths.spd = all;
            }
    
            if (classGrowths.luk!=null) {
                if (typeof classGrowths.luk != 'number') {
                    throwError033(unitClass);
                }
                finalGrowths.luk = classGrowths.luk;
            }
            else {
                finalGrowths.luk = all;
            }
        
            if (classGrowths.def!=null) {
                if (typeof classGrowths.def != 'number') {
                    throwError033(unitClass);
                }
                finalGrowths.def = classGrowths.def;
            }
            else {
                finalGrowths.def = all;
            }
    
            if (classGrowths.res!=null) {
                if (typeof classGrowths.res != 'number') {
                    throwError033(unitClass);
                }
                finalGrowths.res = classGrowths.res;
            }
            else {
                finalGrowths.res = all;
            }
    
            if (classGrowths.bld!=null) {
                if (typeof classGrowths.bld != 'number') {
                    throwError033(unitClass);
                }
                finalGrowths.bld = classGrowths.bld;
            }
            else {
                finalGrowths.bld = all;
            }
    
            if (classGrowths.mov!=null) {
                if (typeof classGrowths.mov != 'number') {
                    throwError033(unitClass);
                }
                finalGrowths.mov = classGrowths.mov;
            }
            else {
                finalGrowths.mov = all;
            }
    
            if (classGrowths.wlv!=null) {
                if (typeof classGrowths.wlv != 'number') {
                    throwError033(unitClass);
                }
                finalGrowths.wlv = classGrowths.wlv;
            }
            else {
                finalGrowths.wlv = all;
            }
        }
        else {
            finalGrowths.mhp = 0;
            finalGrowths.str = 0;
            finalGrowths.mag = 0;
            finalGrowths.ski = 0;
            finalGrowths.spd = 0;
            finalGrowths.luk = 0;
            finalGrowths.def = 0;
            finalGrowths.res = 0;
            finalGrowths.bld = 0;
            finalGrowths.mov = 0;
            finalGrowths.wlv = 0;
        }

        return finalGrowths;

    },

	 getBaseValues: function(unitClass) {
        var classBases = unitClass.custom.bases;       

        var finalBases = {};
        if (classBases!=null) {
            if (typeof classBases != 'object') {
                throwError033(unitClass);
            }
            
            var all;
            if (classBases.all!=null) {
                if (typeof classBases.all != 'number') {
                    throwError033(unitClass);
                }
                all = classBases.all;
            }
            else {
                all = 0;
            }
    
            if (classBases.mhp!=null) {
                if (typeof classBases.mhp != 'number') {
                    throwError033(unitClass);
                }
                finalBases.mhp = classBases.mhp;
            }
            else {
                classBases.mhp = all;
            }
    
            if (classBases.str!=null) {
                if (typeof classBases.str != 'number') {
                    throwError033(unitClass);
                }
                finalBases.str = classBases.str;
            }
            else {
                finalBases.str = all;
            }
    
            if (classBases.mag!=null) {
                if (typeof classBases.mag != 'number') {
                    throwError033(unitClass);
                }
                finalBases.mag = classBases.mag;
            }
            else {
                finalBases.mag = all;
            }
    
            if (classBases.ski!=null) {
                if (typeof classBases.ski != 'number') {
                    throwError033(unitClass);
                }
                finalBases.ski = classBases.ski;
            }
            else {
                finalBases.ski = all;
            }
    
            if (classBases.spd!=null) {
                if (typeof classBases.spd != 'number') {
                    throwError033(unitClass);
                }
                finalBases.spd = classBases.spd;
            }
            else {
                finalBases.spd = all;
            }
    
            if (classBases.luk!=null) {
                if (typeof classBases.luk != 'number') {
                    throwError033(unitClass);
                }
                finalBases.luk = classBases.luk;
            }
            else {
                finalBases.luk = all;
            }
        
            if (classBases.def!=null) {
                if (typeof classBases.def != 'number') {
                    throwError033(unitClass);
                }
                finalBases.def = classBases.def;
            }
            else {
                finalBases.def = all;
            }
    
            if (classBases.res!=null) {
                if (typeof classBases.res != 'number') {
                    throwError033(unitClass);
                }
                finalBases.res = classBases.res;
            }
            else {
                finalBases.res = all;
            }
    
            if (classBases.bld!=null) {
                if (typeof classBases.bld != 'number') {
                    throwError033(unitClass);
                }
                finalBases.bld = classBases.bld;
            }
            else {
                classBases.bld = all;
            }
    
            if (classBases.mov!=null) {
                if (typeof classBases.mov != 'number') {
                    throwError033(unitClass);
                }
                finalBases.mov = classBases.mov;
            }
            else {
                finalBases.mov = all;
            }
    
            if (classBases.wlv!=null) {
                if (typeof classBases.wlv != 'number') {
                    throwError033(unitClass);
                }
                finalBases.wlv = classBases.wlv;
            }
            else {
                finalBases.wlv = all;
            }
        }
        else {
            finalBases.mhp = 0;
            finalBases.str = 0;
            finalBases.mag = 0;
            finalBases.ski = 0;
            finalBases.spd = 0;
            finalBases.luk = 0;
            finalBases.def = 0;
            finalBases.res = 0;
            finalBases.bld = 0;
            finalBases.mov = 0;
            finalBases.wlv = 0;
        }

        return finalBases;

    },

	// D MAS: added difficulty growths
	getDifficultyGrowths: function() {
		var difficulty = root.getMetaSession().getDifficulty();
		var difficultyGrowths = difficulty.custom.growths;

        var finalGrowths = {};
        if (difficultyGrowths!=null) {
            if (typeof difficultyGrowths != 'object') {
                throwError033(difficulty);
            }
            
            var all;
            if (difficultyGrowths.all!=null) {
                if (typeof difficultyGrowths.all != 'number') {
                    throwError033(difficulty);
                }
                all = difficultyGrowths.all;
            }
            else {
                all = 0;
            }
    
            if (difficultyGrowths.mhp!=null) {
                if (typeof difficultyGrowths.mhp != 'number') {
                    throwError033(difficulty);
                }
                finalGrowths.mhp = difficultyGrowths.mhp;
            }
            else {
                finalGrowths.mhp = all;
            }
    
            if (difficultyGrowths.str!=null) {
                if (typeof difficultyGrowths.str != 'number') {
                    throwError033(difficulty);
                }
                finalGrowths.str = difficultyGrowths.str;
            }
            else {
                finalGrowths.str = all;
            }
    
            if (difficultyGrowths.mag!=null) {
                if (typeof difficultyGrowths.mag != 'number') {
                    throwError033(difficulty);
                }
                finalGrowths.mag = difficultyGrowths.mag;
            }
            else {
                finalGrowths.mag = all;
            }
    
            if (difficultyGrowths.ski!=null) {
                if (typeof difficultyGrowths.ski != 'number') {
                    throwError033(difficulty);
                }
                finalGrowths.ski = difficultyGrowths.ski;
            }
            else {
                finalGrowths.ski = all;
            }
    
            if (difficultyGrowths.spd!=null) {
                if (typeof difficultyGrowths.spd != 'number') {
                    throwError033(difficulty);
                }
                finalGrowths.spd = difficultyGrowths.spd;
            }
            else {
                finalGrowths.spd = all;
            }
    
            if (difficultyGrowths.luk!=null) {
                if (typeof difficultyGrowths.luk != 'number') {
                    throwError033(difficulty);
                }
                finalGrowths.luk = difficultyGrowths.luk;
            }
            else {
                finalGrowths.luk = all;
            }
        
            if (difficultyGrowths.def!=null) {
                if (typeof difficultyGrowths.def != 'number') {
                    throwError033(difficulty);
                }
                finalGrowths.def = difficultyGrowths.def;
            }
            else {
                finalGrowths.def = all;
            }
    
            if (difficultyGrowths.res!=null) {
                if (typeof difficultyGrowths.res != 'number') {
                    throwError033(difficulty);
                }
                finalGrowths.res = difficultyGrowths.res;
            }
            else {
                finalGrowths.res = all;
            }
    
            if (difficultyGrowths.bld!=null) {
                if (typeof difficultyGrowths.bld != 'number') {
                    throwError033(difficulty);
                }
                finalGrowths.bld = difficultyGrowths.bld;
            }
            else {
                finalGrowths.bld = all;
            }
    
            if (difficultyGrowths.mov!=null) {
                if (typeof difficultyGrowths.mov != 'number') {
                    throwError033(difficulty);
                }
                finalGrowths.mov = difficultyGrowths.mov;
            }
            else {
                finalGrowths.mov = all;
            }
    
            if (difficultyGrowths.wlv!=null) {
                if (typeof difficultyGrowths.wlv != 'number') {
                    throwError033(difficulty);
                }
                finalGrowths.wlv = difficultyGrowths.wlv;
            }
            else {
                finalGrowths.wlv = all;
            } 
        } else {
			finalGrowths.mhp = 0;
			finalGrowths.str = 0;
			finalGrowths.mag = 0;
			finalGrowths.ski = 0;
			finalGrowths.spd = 0;
			finalGrowths.luk = 0;
			finalGrowths.def = 0;
			finalGrowths.res = 0;
			finalGrowths.bld = 0;
			finalGrowths.mov = 0;
			finalGrowths.wlv = 0;
		}

		return finalGrowths;
	},

	getGlobalVariance: function() {
        var globalVariance =root.getMetaSession().global.variance;       

        var finalVariance = {};
        if (globalVariance!=null) {
            if (typeof globalVariance != 'object') {
                throwError034();
            }
            
            var all;
            if (globalVariance.all!=null) {
                if (typeof globalVariance.all != 'number') {
                    throwError034();
                }
                all = globalVariance.all;
            }
            else {
                all = 0;
            }
    
            if (globalVariance.mhp!=null) {
                if (typeof globalVariance.mhp != 'number') {
                    throwError034();
                }
                finalVariance.mhp = globalVariance.mhp;
            }
            else {
                finalVariance.mhp = all;
            }
    
            if (globalVariance.str!=null) {
                if (typeof globalVariance.str != 'number') {
                    throwError034();
                }
                finalVariance.str = globalVariance.str;
            }
            else {
                finalVariance.str = all;
            }
    
            if (globalVariance.mag!=null) {
                if (typeof globalVariance.mag != 'number') {
                    throwError034();
                }
                finalVariance.mag = globalVariance.mag;
            }
            else {
                finalVariance.mag = all;
            }
    
            if (globalVariance.ski!=null) {
                if (typeof globalVariance.ski != 'number') {
                    throwError034();
                }
                finalVariance.ski = globalVariance.ski;
            }
            else {
                finalVariance.ski = all;
            }
    
            if (globalVariance.spd!=null) {
                if (typeof globalVariance.spd != 'number') {
                    throwError034();
                }
                finalVariance.spd = globalVariance.spd;
            }
            else {
                finalVariance.spd = all;
            }
    
            if (globalVariance.luk!=null) {
                if (typeof globalVariance.luk != 'number') {
                    throwError034();
                }
                finalVariance.luk = globalVariance.luk;
            }
            else {
                finalVariance.luk = all;
            }
        
            if (globalVariance.def!=null) {
                if (typeof globalVariance.def != 'number') {
                    throwError034();
                }
                finalVariance.def = globalVariance.def;
            }
            else {
                finalVariance.def = all;
            }
    
            if (globalVariance.res!=null) {
                if (typeof globalVariance.res != 'number') {
                    throwError034();
                }
                finalVariance.res = globalVariance.res;
            }
            else {
                finalVariance.res = all;
            }
    
            if (globalVariance.bld!=null) {
                if (typeof globalVariance.bld != 'number') {
                    throwError034();
                }
                finalVariance.bld = globalVariance.bld;
            }
            else {
                finalVariance.bld = all;
            }
    
            if (globalVariance.mov!=null) {
                if (typeof globalVariance.mov != 'number') {
                    throwError034();
                }
                finalVariance.mov = globalVariance.mov;
            }
            else {
                finalVariance.mov = all;
            }
    
            if (globalVariance.wlv!=null) {
                if (typeof globalVariance.wlv != 'number') {
                    throwError034();
                }
                finalVariance.wlv = globalVariance.wlv;
            }
            else {
                finalVariance.wlv = all;
            }
        }
        else {
            finalVariance.mhp = 0;
            finalVariance.str = 0;
            finalVariance.mag = 0;
            finalVariance.ski = 0;
            finalVariance.spd = 0;
            finalVariance.luk = 0;
            finalVariance.def = 0;
            finalVariance.res = 0;
            finalVariance.bld = 0;
            finalVariance.mov = 0;
            finalVariance.wlv = 0;
        }

        return finalVariance;
    },
	
// Colonel S: I'm adding this function so I can straight up add stat bonuses/debuffs to specific enemies outside of growths and variance	
	getBaseAdditions: function(unit) {
        var baseAdditions = unit.custom.baseAdditions;       

        var finalBaseAdditions = {};
        if (baseAdditions!=null) {
            /*if (typeof classGrowths != 'unit') {
                throwError033(unit);
            }*/
            
            var all;
            if (baseAdditions.all!=null) {
                if (typeof baseAdditions.all != 'number') {
                    throwError033(unit);
                }
                all = baseAdditions.all;
            }
            else {
                all = 0;
            }
    
            if (baseAdditions.mhp!=null) {
                if (typeof baseAdditions.mhp != 'number') {
                    throwError033(unit);
                }
                finalBaseAdditions.mhp = baseAdditions.mhp;
            }
            else {
                finalBaseAdditions.mhp = all;
            }
    
            if (baseAdditions.str!=null) {
                if (typeof baseAdditions.str != 'number') {
                    throwError033(unit);
                }
                finalBaseAdditions.str = baseAdditions.str;
            }
            else {
                finalBaseAdditions.str = all;
            }
    
            if (baseAdditions.mag!=null) {
                if (typeof baseAdditions.mag != 'number') {
                    throwError033(unit);
                }
                finalBaseAdditions.mag = baseAdditions.mag;
            }
            else {
                finalBaseAdditions.mag = all;
            }
    
            if (baseAdditions.ski!=null) {
                if (typeof baseAdditions.ski != 'number') {
                    throwError033(unit);
                }
                finalBaseAdditions.ski = baseAdditions.ski;
            }
            else {
                finalBaseAdditions.ski = all;
            }
    
            if (baseAdditions.spd!=null) {
                if (typeof baseAdditions.spd != 'number') {
                    throwError033(unit);
                }
                finalBaseAdditions.spd = baseAdditions.spd;
            }
            else {
                finalBaseAdditions.spd = all;
            }
    
            if (baseAdditions.luk!=null) {
                if (typeof baseAdditions.luk != 'number') {
                    throwError033(unit);
                }
                finalBaseAdditions.luk = baseAdditions.luk;
            }
            else {
                finalBaseAdditions.luk = all;
            }
        
            if (baseAdditions.def!=null) {
                if (typeof baseAdditions.def != 'number') {
                    throwError033(unit);
                }
                finalBaseAdditions.def = baseAdditions.def;
            }
            else {
                finalBaseAdditions.def = all;
            }
    
            if (finalBaseAdditions.res!=null) {
                if (typeof baseAdditions.res != 'number') {
                    throwError033(unit);
                }
                finalBaseAdditions.res = baseAdditions.res;
            }
            else {
                finalBaseAdditions.res = all;
            }
    
            if (baseAdditions.bld!=null) {
                if (typeof baseAdditions.bld != 'number') {
                    throwError033(unit);
                }
                finalBaseAdditions.bld = baseAdditions.bld;
            }
            else {
                finalBaseAdditions.bld = all;
            }
    
            if (baseAdditions.mov!=null) {
                if (typeof baseAdditions.mov != 'number') {
                    throwError033(unit);
                }
                finalBaseAdditions.mov = baseAdditions.mov;
            }
            else {
                finalBaseAdditions.mov = all;
            }
    
            if (baseAdditions.wlv!=null) {
                if (typeof baseAdditions.wlv != 'number') {
                    throwError033(unit);
                }
                finalBaseAdditions.wlv = baseAdditions.wlv;
            }
            else {
                finalBaseAdditions.wlv = all;
            }
        }
        else {
            finalBaseAdditions.mhp = 0;
            finalBaseAdditions.str = 0;
            finalBaseAdditions.mag = 0;
            finalBaseAdditions.ski = 0;
            finalBaseAdditions.spd = 0;
            finalBaseAdditions.luk = 0;
            finalBaseAdditions.def = 0;
            finalBaseAdditions.res = 0;
            finalBaseAdditions.bld = 0;
            finalBaseAdditions.mov = 0;
            finalBaseAdditions.wlv = 0;
        }

        return finalBaseAdditions;

    },

    //Set the unit stats according to the class base growths. This growths are defined using custom parameters
    setUnitStats: function(unit) {        
        var bases, levels, hp, str, mag, ski, spd, luk, def, res, con, mov, growths, difficultyGrowths;

		bases = {
			mhp: ParamGroup.getUnitValue(unit, ParamType.MHP),
			str: ParamGroup.getUnitValue(unit, ParamType.POW),
			mag: ParamGroup.getUnitValue(unit, ParamType.MAG),
			ski: ParamGroup.getUnitValue(unit, ParamType.SKI),
			spd: ParamGroup.getUnitValue(unit, ParamType.SPD),
			luk: ParamGroup.getUnitValue(unit, ParamType.LUK),
			def: ParamGroup.getUnitValue(unit, ParamType.DEF),
			res: ParamGroup.getUnitValue(unit, ParamType.MDF),
			bld: ParamGroup.getUnitValue(unit, ParamType.BLD),
			mov: ParamGroup.getUnitValue(unit, ParamType.MOV),
			wlv: ParamGroup.getUnitValue(unit, ParamType.WLV)
		}
		difficultyGrowths = this.getDifficultyGrowths();
		growths = difficultyGrowths;
		if (unit.getImportance() === ImportanceType.MOB) {
			bases = this.getBaseValues(unit.getClass()); //Initial information of the class
			growths = this.getGrowthValues(unit.getClass());
		}
        levels = unit.getLv() - 1; //Level ups from lvl 1 to current level
		baseAdditions = this.getBaseAdditions(unit);

        unit.setParamValue(ParamType.MHP, this._calculateStat(bases.mhp, growths.mhp, levels, baseAdditions.mhp));
        unit.setHP(ParamGroup.getClassUnitValue(unit, ParamType.MHP));
        unit.setParamValue(ParamType.POW, this._calculateStat(bases.str, growths.str, levels, baseAdditions.str));
        unit.setParamValue(ParamType.MAG, this._calculateStat(bases.mag, growths.mag, levels, baseAdditions.mag));
        unit.setParamValue(ParamType.SKI, this._calculateStat(bases.ski, growths.ski, levels, baseAdditions.ski));
        unit.setParamValue(ParamType.SPD, this._calculateStat(bases.spd, growths.spd, levels, baseAdditions.spd));
        unit.setParamValue(ParamType.LUK, this._calculateStat(bases.luk, growths.luk, levels, baseAdditions.luk));
        unit.setParamValue(ParamType.DEF, this._calculateStat(bases.def, growths.def, levels, baseAdditions.def));
        unit.setParamValue(ParamType.MDF, this._calculateStat(bases.res, growths.res, levels, baseAdditions.res));
        unit.setParamValue(ParamType.BLD, this._calculateStat(bases.bld, growths.bld, levels, baseAdditions.bld));
        unit.setParamValue(ParamType.MOV, this._calculateStat(bases.mov, growths.mov, levels, baseAdditions.mov));
        unit.setParamValue(ParamType.WLV, this._calculateStat(bases.wlv, growths.wlv, levels, baseAdditions.wlv));
    },

    _calculateStat: function(base, growth, levels, extra) {
        return base + Math.round((growth*levels)/100) + extra;
    },

    setRandomVariance: function(unit) {
        var dHp, dStr, dMag, dSki, dSpd, dLuk, dDef, dRes, dBld, dMov, dWlv;

        var globalParameter = root.getMetaSession().global;
        var variance = this.getGlobalVariance();

        dHp = Math.floor(Math.random() * (variance.mhp*2 + 1)) - variance.mhp;
        dStr = Math.floor(Math.random() * (variance.str*2 + 1)) - variance.str;
        dMag = Math.floor(Math.random() * (variance.mag*2 + 1)) - variance.mag;
        dSki = Math.floor(Math.random() * (variance.ski*2 + 1)) - variance.ski;
        dSpd = Math.floor(Math.random() * (variance.spd*2 + 1)) - variance.spd;
        dLuk = Math.floor(Math.random() * (variance.luk*2 + 1)) - variance.luk;
        dDef = Math.floor(Math.random() * (variance.def*2 + 1)) - variance.def;
        dRes = Math.floor(Math.random() * (variance.res*2 + 1)) - variance.res;
        dBld = Math.floor(Math.random() * (variance.bld*2 + 1)) - variance.bld;
        dMov = Math.floor(Math.random() * (variance.mov*2 + 1)) - variance.mov;
        dWlv = Math.floor(Math.random() * (variance.wlv*2 + 1)) - variance.wlv;
        
        unit.setParamValue(ParamType.MHP, unit.getParamValue(ParamType.MHP) + dHp);
        unit.setHP(ParamGroup.getClassUnitValue(unit, ParamType.MHP));
        unit.setParamValue(ParamType.POW, unit.getParamValue(ParamType.POW) + dStr);
        unit.setParamValue(ParamType.MAG, unit.getParamValue(ParamType.MAG) + dMag);
        unit.setParamValue(ParamType.SKI, unit.getParamValue(ParamType.SKI) + dSki);
        unit.setParamValue(ParamType.SPD, unit.getParamValue(ParamType.SPD) + dSpd);
        unit.setParamValue(ParamType.LUK, unit.getParamValue(ParamType.LUK) + dLuk);
        unit.setParamValue(ParamType.DEF, unit.getParamValue(ParamType.DEF) + dDef);
        unit.setParamValue(ParamType.MDF, unit.getParamValue(ParamType.MDF) + dRes);
        unit.setParamValue(ParamType.BLD, unit.getParamValue(ParamType.BLD) + dBld);
        unit.setParamValue(ParamType.MOV, unit.getParamValue(ParamType.MOV) + dMov);
        unit.setParamValue(ParamType.WLV, unit.getParamValue(ParamType.WLV) + dWlv);
    },

    setWeaponRanks: function(unit) {
        var item, req;
        for (var i=0; i<UnitItemControl.getPossessionItemCount(unit); i++) {
            item = UnitItemControl.getItem(unit, i);
            req = item.custom.req!=null ? item.custom.req : RANK_SYSTEM[0][0];            
            this._setRank(unit, item.getWeaponType(), WeaponRankControl.rankToNumber(req));            
        }
    },

    _setRank: function(unit, weaponType, value) {
        var rankArray = unit.custom.rank;
        if (rankArray==null) {
            unit.custom.rank = [ [weaponType.getName(), value] ];
        }
        else {
            var found = false;
            var i = 0;
            var rank;
            while (i<rankArray.length && !found) {
                if (rankArray[i][0]==weaponType.getName() && rankArray[i][1]<value) {
                    found = true;
                    unit.custom.rank[i][1] = value;
                }                
                i++;
            }
            if (!found) {
                unit.custom.rank.push([weaponType.getName(), value]);
            }
        }
    }
}