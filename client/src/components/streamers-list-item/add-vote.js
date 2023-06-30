export function addVote(vote, id, votes, setVotes, handleVote) {
    handleVote({ vote: vote }, id)

    if (vote === "upvote" && votes.upvotes >= 1) {
        setVotes(prevVotes => ({
            ...prevVotes,
            upvotes: prevVotes.upvotes - 1
        }))
    } else if (vote === "downvote" && votes.downvotes >= 1) {
        setVotes(prevVotes => ({
            ...prevVotes,
            downvotes: prevVotes.downvotes - 1
        }))
    } else if (vote === "upvote" && votes.downvotes >= 1) {
        setVotes(prevVotes => ({
            upvotes: prevVotes.upvotes + 1,
            downvotes: prevVotes.downvotes - 1
        }))
    } else if (vote === "downvote" && votes.upvotes >= 1) {
        setVotes(prevVotes => ({
            upvotes: prevVotes.upvotes - 1,
            downvotes: prevVotes.downvotes + 1
        }))
    } else if (vote === "upvote") {
        setVotes(prevVotes => ({
            ...prevVotes,
            upvotes: prevVotes.upvotes + 1
        }))
    } else if (vote === "downvote") {
        setVotes(prevVotes => ({
            ...prevVotes,
            downvotes: prevVotes.downvotes + 1
        }))
    }
}