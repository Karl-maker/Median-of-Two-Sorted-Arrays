/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    let nums3 = [];
    
    function isInt(n) {
        return n % 1 === 0;
    }
    
    function insertInOrder(arr, num, start = 0, end = arr.length){
        
        // Base Cases
        
        if(arr.length === 0) // Array is empty so return with 1 element
        {
            return [num];
        }
        
        if(num >= arr[arr.length - 1]) // return array with num at position end USE insert func
        {
            arr.splice(arr.length, 0, num);
            return arr;
        }
            
        if(num <= arr[0]) // return array with num at position start USE insert func
        {
            arr.splice(0, 0, num);
            return arr;
        }
            
        // Should num be placed in middle ?
        
        let middle = (start + end) / 2;
        
        if(!isInt(middle)) // it is a float
        {
            middle = middle - 0.5;
        }
        
        if(arr.length === 2)
        {
            middle = 0;
        }
        
        if(num >= arr[middle] && num <= arr[middle + 1])
        { 
            arr.splice(middle + 1, 0, num);
            return arr;
        }
            
    
        // Go Left OR Right ?
        
        if(num >= arr[middle]) // Go Right
        {
            return insertInOrder(arr, num, middle, end);
        } else {
            return insertInOrder(arr, num, start, middle);
        }
        
    }
    
    if(nums2.length === 0){
        nums3 = nums1;
    }
    
    for(i = 0; i < nums2.length; i++)
    {
        nums3 = insertInOrder(nums1, nums2[i]);
        nums1 = nums3;
    }
    
    // Find Median of Array
    
    let middle_position = nums3.length / 2;
    
    if(!isInt(middle_position))
    {
        middle_position = middle_position - 0.5;
    }
    
    if(nums3.length % 2 === 0) // even number which means 2 elements 
    {
        return (nums3[middle_position] + nums3[middle_position - 1]) / 2;
    } else { // odd number
        return nums3[middle_position];
    }
};
