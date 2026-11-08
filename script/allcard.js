const allCards = (id) => { 
        spinner(true);

    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues") 
        .then((response) => response.json()) 
        .then((data) => { 
            activeButton(id);
            if(id=="btn-all"){
                displayAllCards(data.data);

            }else if(id =="btn-open"){
                const openStatusCards =data.data.filter(
                    (element)=>element.status==="open",
                );
                displayAllCards(openStatusCards);
            }else if(id==("btn-closed")){
                const  closedStatusCards =data.data.filter(
                    (element)=>element.status ==="closed",
                );
                displayAllCards(closedStatusCards);

            }


            // Handle the fetched data 
           
        });

}


// {
//     "id": 4,
//     "title": "Performance issues with large datasets",
//     "description": "Application becomes slow when loading more than 1000 items. Need to implement pagination or virtual scrolling.",
//     "status": "open",
//     "labels": [
//         "bug",
//         "enhancement"
//     ],
//     "priority": "high",
//     "author": "alex_perf",
//     "assignee": "john_doe",
//     "createdAt": "2024-01-18T11:00:00Z",
//     "updatedAt": "2024-01-18T11:00:00Z"
// }
const displayAllCards = (data) => {
    const cardContainer = document.getElementById("all-card-container");
    cardContainer.innerHTML = ""; // Clear existing cards
    data.forEach((element) => {
        
        // Create card elements for each issue
        const cardChildContainer = document.createElement("div");
        //set inner htm
        cardChildContainer.innerHTML=`
            <div class="card bg-base-100 shadow-md hover:shadow-lg transition-shadow border-t-4 ${element.status === 'open' ? 'border-green-700' : 'border-violet-700'}">
                <div class="card-body">

                    <!-- Top section: Icon and Priority Badge -->
                    <div class="flex justify-between items-start mb-4">

                        <!-- Status Icon -->
                        <div class="w-7 h-7 rounded-full bg-success/30 flex items-center justify-center">
                            <img src="${element.status === 'open' ? './assets/Open-Status.png' : './assets/Closed-Status.png'}" alt="">
                        </div>

                        <!-- Priority Badge -->
                        <span class="badge badge-error badge-lg text-error ${element.priority === 'high' ? 'bg-error/30' : element.priority === 'low' ? 'bg-gray-200' : 'bg-warning/30'} border-0 font-semibold">
                            ${element.priority}
                        </span>

                    </div>

                    <h2 class="text-xl font-bold">Fix navigation menu on mobile devices</h2>

                    <p class="text-base-content/60 mb-4">
                         ${element.description}
                    </p>
                    <div class="flex gap-2 mb-4">
                        <div class="gap-2 flex flex-wrap">
                                ${element.labels.map(label => `
                            <span class="badge badge-outline ${label === 'bug' ? 'bg-red-100    text-red-700 border-red-300' : 'bg-yellow-100 text-gray-700'}">
                            ${label}
                            </span>
                            `).join('')}
                        </div>
                    </div>
                   
                    <div
                    class="flex justify-between items-center text-sm text-base-content/60 border-t pt-4">
            
                        <span>#${element.id} by <span class="font-medium">${element.author == "" ? "no author found" : element.author}</span></span>
                        <span>creatted: ${new Date(element.createdAt).toLocaleDateString()}</span>
                     </div>

                    <div class="flex justify-between items-center text-sm text-base-content/60  pt-4">
                        <span class="font-medium">Assignee: ${element.assignee == "" ? "no assignee found" : element.assignee}</span>
                         <span>updated: ${new Date(element.updatedAt).toLocaleDateString()}</span>
                    </div>

          
                </div>
                
            </div>


        



        `
      
      
        cardContainer.append(cardChildContainer)
       
    });
    spinner(false);
    parentCardContainerLength();
   
}
allCards("btn-all");

