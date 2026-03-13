export const colors = {
  background: '#E0EAFF',
  
  card: {
    background: '#FFFFFF',
    border: '#D9DADD',
    highlight: '#DDFFE3',
    text: {
        name: '#2D4263',
        details: '#6D6D6D',
    },
    status: {
        new: '#67D97C',
        inProgress: '#FFC470',
        resolved: '#52B69A',
        cancelled: '#FF0000',
        selectLawyer: '#52B69A',
    },
  },

  nav: {
    background: '#FFFFFF',
    highlight: '#E8F3FF',
    icon: '#A6CCF6',
    text: '#46649C',
    user: '#D9D9D9',
    sort: '#6889CC',
  },

  search: {
    background: '#FFFFFF',
    icon: '#3B3C40',
    placeholder: '#00000066',
    border: '#E4E4E4',
  },

  scroll: {
    background: '#D9D9D9',
    scrollbar: '#6D6D6D',
  }
} as const;