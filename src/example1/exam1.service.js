export const botService = async (code) => {
    const directions = ['North', 'East', 'South', 'West'];
    let x = 0, y = 0;
    let directionIndex = 0;

    try {
        for (let i = 0; i < code.length; i++) {
            const command = code[i];
    
            if (command === 'R') {
                directionIndex = (directionIndex + 1) % 4;
            } else if (command === 'L') {
                directionIndex = (directionIndex - 1 + 4) % 4;
            } else if (command === 'W') {
                let numStart = i + 1; 

                // loop เพื่อข้ามตัวเลขน่าค่า string
                for (; numStart < code.length && /\d/.test(code[numStart]); numStart++) {
    
                } 
    
                const steps = parseInt(code.slice(i + 1, numStart), 10);
                if (directions[directionIndex] === 'North') {
                    y += steps;
                    
                } else if (directions[directionIndex] === 'East') {
                    x += steps;
    
                } else if (directions[directionIndex] === 'South') {
                    y -= steps;
    
                } else if (directions[directionIndex] === 'West') {
                    x -= steps;
    
                }
                i = numStart - 1;
            }
        }
        return {result: true, status: 'Success', message: { x, y, direction: directions[directionIndex]}, errorMessage: []}

    } catch (error) {
        return error
    }
}