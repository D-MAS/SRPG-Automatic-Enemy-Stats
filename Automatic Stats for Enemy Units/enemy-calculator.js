//Plugin by Goinza

var UNIT_BASES = false;

EnemyCalculator = {

	getBaseValues: function(unitClass) {
		// var classBases = unit.custom.bases;
		
	},

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
	
	getDifficultyGrowthValues: function() {
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

    //Set the unit stats according to the class base growths. This growths are defined using custom parameters
    setUnitStats: function(unit) {        
        var bases, levels, hp, str, mag, ski, spd, luk, def, res, con, mov, growths, difficultyGrowths;

        bases = unit.getClass().getPrototypeInfo().getInitialArray(); //Initial information of the class
        levels = unit.getLv() - 1; //Level ups from lvl 1 to current level
		difficultyGrowths = this.getDifficultyGrowthValues();
		if (unit.getImportance() === ImportanceType.MOB) {
			growths = this.getGrowthValues(unit.getClass());
			growths.str += difficultyGrowths.str || 0
			growths.mag += difficultyGrowths.mag || 0
			growths.ski += difficultyGrowths.ski || 0
			growths.spd += difficultyGrowths.spd || 0
			growths.luk += difficultyGrowths.luk || 0
			growths.def += difficultyGrowths.def || 0
			growths.mdf += difficultyGrowths.mdf || 0
			growths.bld += difficultyGrowths.bld || 0
			growths.mov += difficultyGrowths.mov || 0
			growths.wlv += difficultyGrowths.wlv || 0
		} else {
			growths = difficultyGrowths;
		}
		// growths = growths + difficulty;

		if (UNIT_BASES) {
			unit.setParamValue(ParamType.MHP, this._calculateStat(ParamGroup.getUnitValue(unit, ParamType.MHP), growths.mhp, levels));
			unit.setHP(ParamGroup.getClassUnitValue(unit, ParamType.MHP));
			unit.setParamValue(ParamType.POW, this._calculateStat(ParamGroup.getUnitValue(unit, ParamType.POW), growths.str, levels));
			unit.setParamValue(ParamType.MAG, this._calculateStat(ParamGroup.getUnitValue(unit, ParamType.MAG), growths.mag, levels));
			unit.setParamValue(ParamType.SKI, this._calculateStat(ParamGroup.getUnitValue(unit, ParamType.SKI), growths.ski, levels));
			unit.setParamValue(ParamType.SPD, this._calculateStat(ParamGroup.getUnitValue(unit, ParamType.SPD), growths.spd, levels));
			unit.setParamValue(ParamType.LUK, this._calculateStat(ParamGroup.getUnitValue(unit, ParamType.LUK), growths.luk, levels));
			unit.setParamValue(ParamType.DEF, this._calculateStat(ParamGroup.getUnitValue(unit, ParamType.DEF), growths.def, levels));
			unit.setParamValue(ParamType.MDF, this._calculateStat(ParamGroup.getUnitValue(unit, ParamType.MDF), growths.res, levels));
			unit.setParamValue(ParamType.BLD, this._calculateStat(ParamGroup.getUnitValue(unit, ParamType.BLD), growths.bld, levels));
			unit.setParamValue(ParamType.MOV, this._calculateStat(ParamGroup.getUnitValue(unit, ParamType.MOV), growths.mov, levels));
			unit.setParamValue(ParamType.WLV, this._calculateStat(ParamGroup.getUnitValue(unit, ParamType.WLV), growths.wlv, levels));
		} else {
			unit.setParamValue(ParamType.MHP, this._calculateStat(bases[ParamType.MHP], growths.mhp, levels));
			unit.setHP(ParamGroup.getClassUnitValue(unit, ParamType.MHP));
			unit.setParamValue(ParamType.POW, this._calculateStat(bases[ParamType.POW], growths.str, levels));
			unit.setParamValue(ParamType.MAG, this._calculateStat(bases[ParamType.MAG], growths.mag, levels));
			unit.setParamValue(ParamType.SKI, this._calculateStat(bases[ParamType.SKI], growths.ski, levels));
			unit.setParamValue(ParamType.SPD, this._calculateStat(bases[ParamType.SPD], growths.spd, levels));
			unit.setParamValue(ParamType.LUK, this._calculateStat(bases[ParamType.LUK], growths.luk, levels));
			unit.setParamValue(ParamType.DEF, this._calculateStat(bases[ParamType.DEF], growths.def, levels));
			unit.setParamValue(ParamType.MDF, this._calculateStat(bases[ParamType.MDF], growths.res, levels));
			unit.setParamValue(ParamType.BLD, this._calculateStat(bases[ParamType.BLD], growths.bld, levels));
			unit.setParamValue(ParamType.MOV, this._calculateStat(bases[ParamType.MOV], growths.mov, levels));
			unit.setParamValue(ParamType.WLV, this._calculateStat(bases[ParamType.WLV], growths.wlv, levels));
		}

    },

    _calculateStat: function(base, growth, levels) {
        return base + Math.round((growth*levels)/100);
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