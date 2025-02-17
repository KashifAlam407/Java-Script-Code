// How to Check for Subset?
Set.prototype.subSet = function(otherSet)
{
    // if size of this set is greater
    // than otherSet then it can't be 
    //  a subset
    if(this.size > otherSet.size)
        return false;
    else
    {
        for(let elem of this)
        {
            // if any of the element of 
            // this is not present in the
            // otherset then return false
            if(!otherSet.has(elem))
                return false;
        }
        return true;
    }
}

// using the subSet function

// Declaring different sets
let setA = new Set([10, 20, 30]);
let setB = new Set([50, 60, 10, 20, 30, 40]);
let setC = new Set([10, 30, 40, 50]);

// prints true
console.log(setA.subSet(setB));

// prints false
console.log(setA.subSet(setC));

// prints true
console.log(setC.subSet(setB));



//-------------------------------------------
// How to find Union?
Set.prototype.union = function(otherSet)
{
    // creating new set to store union
    let res = new Set();

    // iterate over the values and add 
    // it to unionSet
    for (let x of this)
    {
        res.add(x);
    }

    // iterate over the values and add it to 
    // the unionSet
    for(let x of otherSet)
        res.add(x);

    // return the values of unionSet
    return res;
}

// using the union function
// Declaring values for set1 and set2
let s1 = new Set([10, 20, 30, 40, 50]);
let s2 = new Set([40, 50, 60, 70, 80]);  
let res = s1.union(s2);
console.log(res.values());




//-------------------------------------------
// How to find Intersection?
Set.prototype.intersection = function(otherSet)
{
    // creating new set to store intersection
    let res = new Set();

    // Iterate over the values 
    for(let x of otherSet)
    {
        // if the other set contains a 
        // similar value as of value[i]
        // then add it to intersectionSet
        if(this.has(x))
            res.add(x);
    }
    return res;                
}

// using intersection function
// Declaring values for set1 and set2
let s1 = new Set([10, 20, 30, 40, 50]);
let s2 = new Set([40, 50, 60, 70, 80]);  
let res = s1.intersection(s2);

console.log(res.values());




//-----------------------------------------
// How to find difference of two sets?
Set.prototype.difference = function(otherSet)
{
    // creating new set to store difference
    let res = new Set();

    // iterate over the values
    for(let x of this)
    {
        // if the value[i] is not present 
        // in otherSet add to the differenceSet
        if(!otherSet.has(x))
            res.add(x);
    }

    return res;
}

// using difference function
// Declaring values for set1 and set2
let s1 = new Set([10, 20, 30, 40, 50]);
let s2 = new Set([40, 50, 60, 70, 80]);  
let res = s1.difference(s2);

console.log(res);